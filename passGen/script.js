
  const lengthInput = document.querySelector('input[type="number"]');
  const checkboxes = document.querySelectorAll('.form-check-input');
  const generateBtn = document.querySelector('.btn-primary');
  const passwordField = document.querySelector('input[type="text"]');
  const progressBar = document.querySelector('.progress-bar');
  const strengthText = document.querySelector('small');
  const copyBtn = document.querySelector('.copy-btn');

  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special = "!@#$%^&*()_+[]{}|;:,.<>?";

  const ambiguous = "l1IO0";

  generateBtn.addEventListener("click", () => {
    let length = parseInt(lengthInput.value);

    let includeNumbers = checkboxes[0].checked;
    let includeUppercase = checkboxes[1].checked;
    let includeSpecial = checkboxes[2].checked;
    let excludeAmbiguous = checkboxes[3].checked;

    let chars = lowercase;

    if (includeNumbers) chars += numbers;
    if (includeUppercase) chars += uppercase;
    if (includeSpecial) chars += special;

    // Remove ambiguous characters
    if (excludeAmbiguous) {
      for (let char of ambiguous) {
        chars = chars.replaceAll(char, "");
      }
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    passwordField.value = password;

    updateStrength(password);
  });

  function updateStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;

    if (strength <= 1) {
      progressBar.style.width = "25%";
      progressBar.className = "progress-bar bg-danger";
      strengthText.textContent = "Weak";
      strengthText.className = "text-danger fw-bold";
    } else if (strength == 2) {
      progressBar.style.width = "50%";
      progressBar.className = "progress-bar bg-warning";
      strengthText.textContent = "Medium";
      strengthText.className = "text-warning fw-bold";
    } else if (strength == 3) {
      progressBar.style.width = "75%";
      progressBar.className = "progress-bar bg-info";
      strengthText.textContent = "Strong";
      strengthText.className = "text-info fw-bold";
    } else {
      progressBar.style.width = "100%";
      progressBar.className = "progress-bar bg-success";
      strengthText.textContent = "Very Strong";
      strengthText.className = "text-success fw-bold";
    }
  }

  // Copy Button
  copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 1500);
  });