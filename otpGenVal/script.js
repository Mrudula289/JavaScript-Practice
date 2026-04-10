btnElement=document.querySelector('#generateOTP')
resultElement=document.querySelector('#result')
inputOneElmt=document.querySelector('#inputOne')
inputTwoElmt=document.querySelector('#inputTwo')
inputThreeElmt=document.querySelector('#inputThree')
inputFourElmt=document.querySelector('#inputFour')



function genOTP(){
    N1=Math.floor((Math.random()*9000)+1000)

    console.log(N1)

    alert("your OTP is "+N1)
}

btnElement.addEventListener('click',genOTP)

function toNextInput(event){
    console.log(event)
    document.querySelector(event).focus()
}


userOTP=' '

function showResult(){
    userOTP=inputOneElmt.value+inputTwoElmt.value+inputThreeElmt.value+inputFourElmt.value
    if(userOTP==N1){
       alert("OTP is correct")
    }
    else{
        alert("OTP is incorrect")   
    }
}  

resultElement.addEventListener('click',showResult)


function clearOTP() {
  inputs.forEach(input => input.value = "");
  inputs[0].focus(); // go back to first box
}
