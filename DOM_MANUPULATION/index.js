[Log] Live reload enabled. (DOM_MANUPULATION, line 38)
> Selected Element
< <html lang="en">…</html>
> window.open
< function open() {
    [native code]
}
> document.title='Simple Webpage'
< "Simple Webpage"
> document.body.style.backgroundColor ='#282c34'
< "#282c34"
> let img = document.createElement("img")
< undefined
> let heading = document.createElement('h1')
< undefined
> heading.textContent="Welcome To My Dynamic Page"
< "Welcome To My Dynamic Page"
> heading.style.color='#0000'
< "#0000"
> heading.style.color='#000'
< "#000"
> heading.style.textAlign = 'center'
< "center"
> heading.style.fontSize='2.5rem'
< "2.5rem"
> heading.style.marginTop ='20px'
< "20px"
> document.body.appendChild(heading);
< <h1 style="color: rgb(0, 0, 0); text-align: center; font-size: 2.5rem; margin-top: 20px;">Welcome To My Dynamic Page</h1>
> heading.style.color='white';
< "white"
> let img =document.createElement('img');
< SyntaxError: Can't create duplicate variable: 'img'
> img.scr="https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/a/38122.Jpg";
< "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/a/38122.Jpg"
> img.style.width="100vh";
< "100vh"
> img.style.height='50vh';
< "50vh"
> img.style.objectFit='cover';
< "cover"
> img.style.display='block';
< "block"
> img.style.margin='0 auto'
< "0 auto"
> document.body.appendChild(img);
< <img style="width: 100vh; height: 50vh; object-fit: cover; display: block; margin: 0px auto;">
> img.src="https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/a/38122.Jpg";
< "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/a/38122.Jpg"
> let para = document.createElement("p");
< undefined
> para.textContent=""Tulips" by Sylvia Plath is a poem exploring a speaker’s desire for peaceful emptiness and detachment while in a hospital, disrupted by bright red flowers symbolizing the,,painful obligation of living.";
< SyntaxError: Unexpected identifier 'Tulips'
> para.textContent="Tulips by Sylvia Plath is a poem exploring a speaker’s desire for peaceful emptiness and detachment while in a hospital, disrupted by bright red flowers symbolizing the,,painful obligation of living.";
< "Tulips by Sylvia Plath is a poem exploring a speaker’s desire for peaceful emptiness and detachment while in a hospital, disrupted by bright red flowers symbolizing the,,painful obligation of living."
> para.style.color="#ddd"
< "#ddd"
> para.style.fontSize='1.5rem';
< "1.5rem"
> para.style.textAlign='center';
< "center"
> para.style.maxWidth='600px';
< "600px"
> para.style.margin='20px auto';
< "20px auto"
> para.style.lineHeight='1.6';
< "1.6"
> document.body.appendChild(para);
< <p style="color: rgb(221, 221, 221); font-size: 1.5rem; text-align: center; max-width: 600px; margin: 20px auto; line-height: 1.6;">…</p>
> let button= document.createElement("Button");
< undefined
> button.textContent="Click Me";
< "Click Me"
> button.style.display="block";
< "block"
> button.style.margin="20px auto";
< "20px auto"
> button.style.padding="12px 24px";
< "12px 24px"
> button.style.fontSize="1.2rem";
< "1.2rem"
> button.style.border="none";
< "none"
> button.style.borderRadius="8px";
< "8px"
> button.style.cursor="pointer";
< "pointer"
> button.style.backgroundColor="#ff9800";
< "#ff9800"
> button.style.color="white";
< "white"
> button.style.boxShadow="2px 2px 10px rgba(0,0,0,0.3)";
< "2px 2px 10px rgba(0,0,0,0.3)"
> document.body.appendChild(button);
< <button style="display: block; margin: 20px auto; padding: 12px 24px; font-size: 1.2rem; border: medium; border-radius: 8px; cursor: pointer; background-color: rgb(255, 152, 0); color: white; box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 10px;">Click Me</button>
> button.style.backgroundColor="pink";
< "pink"
> button.style.backgroundColor="#b33b72";
< "#b33b72"
> button.addEventListener("mouseover",function(){})
< undefined
> button.addEventListener("mouseover",function(){button.style.backgroundColor="#79305a";})
< undefined
> button.addEventListener("mouseout",function(){button.style.backgroundColor="#b33b72";})
< undefined
> let card=document.createElement("div");
< undefined
> card.style.width="300px";
< "300px"
> card.style.margin="20px auto";
< "20px auto"
> card.style.padding="20px";
< "20px"
> card.style.borderRadius="12px";
< "12px"
> card.style.boxShadow="0 5px 15px rgba(0,0,0,0.2)";
< "0 5px 15px rgba(0,0,0,0.2)"
> card.style.backgroundColor="#333";
< "#333"
> card.style.textAlign="center";
< "center"
> document.body.appendChild(card);
< <div style="width: 300px; margin: 20px auto; padding: 20px; border-radius: 12px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px; background-color: rgb(51, 51, 51); text-align: center;"></div>
> let cardTitle= document.createElement("h2");
< undefined
> cardTitle.textContent=".......";
< "......."
> cardTitle.style.color="#ff9800";
< "#ff9800"
> document.card.appendChild(cardTitle);
< TypeError: undefined is not an object (evaluating 'document.card.appendChild')
> card.appendChild(cardTitle);
< <h2 style="color: rgb(255, 152, 0);">.......</h2>
> let cardText=document.createElement("p");
< undefined
> cardText.textContent="This was created using JavaScript";
< "This was created using JavaScript"
> cardText.style.color="white";
< "white"
> cardText.style.fontSize="1rem";
< "1rem"
> cardText.style.marginTop="10px";
< "10px"
> card.appendChild(cardText);
< <p style="color: white; font-size: 1rem; margin-top: 10px;">This was created using JavaScript</p>
> cardTitle.textContent="Simple & Sweet";
< "Simple & Sweet"
> cardText.textContent="“Be like a tulip: quiet on the outside, but full of color within.”";
< "“Be like a tulip: quiet on the outside, but full of color within.”"
> card.style.backgroundColor="#b33b72";
< "#b33b72"
> cardTitle.style.color="white";
< "white"
> document.body.style.display="flex";
< "flex"
> document.body.style.flexDirection="column";
< "column"
> document.body.style.alignItems="center";
< "center"
> document.body.style.justifyContent="center";
< "center"
> document.body.style.height="100vh";
< "100vh"
> document.body.style.fontFamily="Arial,San-serif";
< "Arial,San-serif"
> document.body.prepend(heading);
< undefined
> document.body.appendChild(heading);
< <h1 style="color: white; text-align: center; font-size: 2.5rem; margin-top: 20px;">Welcome To My Dynamic Page</h1>
> document.body.prependChild(heading);
< TypeError: document.body.prependChild is not a function. (In 'document.body.prependChild(heading)', 'document.body.prependChild' is undefined)
> document.body.prepend(heading);
< undefined
> heading.textContent="welcome";
< "welcome"
> let heading=document.createElement("h1");
< SyntaxError: Can't create duplicate variable: 'heading'
> let heading1=document.createElement("h1");
< undefined
> heading1.textContent = "Welcome To My Dynamic Page"
< "Welcome To My Dynamic Page"
> heading1.style.color = "white"
< "white"
> heading1.style.textAlign = "center"
< "center"
> heading1.style.fontSize = "2.5rem"
< "2.5rem"
> heading1.style.marginTop = "20px"
< "20px"
> document.body.prepend(heading1);
< undefined
> heading1.textContent="Welcome To My Dynamic Page";
< "Welcome To My Dynamic Page"
> document.body.prepend(heading1);
< undefined
< undefined
> heading1.style.color = "#b33b72";
< "#b33b72"
> heading.style.position = "relative"
< "relative"
> heading.style.zIndex = "1000"
< "1000"
> document.body.prepend(heading)
< undefined
> document.body.style.display = "block"
< "block"
> heading1.style.color = "white";
< "white"
> document.querySelectorAll('h1')[0].remove()
< undefined