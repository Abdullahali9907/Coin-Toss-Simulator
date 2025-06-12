//  flip Coin animation Function
function flipCoin(){
    let animationMove = document.querySelector(".display_img");
    let flipSound = document.querySelector("#flipSound");


    // Adding Animation CLass
    animationMove.classList.add("flip");

    flipSound.currentTime = 0;
    flipSound.play();

     // Change image after short delay
      setTimeout(() => {
        // const isHeads = Math.random() < 2 + 1;
        let randomNumber = Math.floor(Math.random() * 2 + 1);
        animationMove.src = randomNumber ? `./Images/Coinflip${randomNumber}.png` : `./Images/Coinflip${randomNumber}.png`;
        // Changing the text while fliping the coing simultaniously .
        if(randomNumber === 1 ){
        document.querySelector("h2").innerHTML = "Its a Head" ;
      } else if (randomNumber === 2){
        document.querySelector("h2").innerHTML = "Its a Tail" ;
      }

      }, 300);

      
   
       // Remove animation class after it's done
      setTimeout(() => {
        animationMove.classList.remove("flip");
      }, 600);
}