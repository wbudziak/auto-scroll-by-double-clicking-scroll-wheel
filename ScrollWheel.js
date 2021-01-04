let timeLeft = 0;
// const yourElement = document.querySelector(".yourElement")

document.body.addEventListener('auxclick' ,function(e){
    timeLeft +=1;
    setTimeout(function(){
        timeLeft = 0;
    }, 500);
    if(timeLeft === 2){
        scrollTo({
            top: 0,
            behavior: 'smooth'
          });     
    // if you want scroll to the specific element

        // yourElement.scrollIntoView({
        //     behavior: 'smooth'
        // });
    }
})