let timeLeft = 0;
document.body.addEventListener('auxclick' ,function(e){
    timeLeft +=1;
    setTimeout(function(){
        timeLeft = 0;
    }, 500);
    if(timeLeft === 2){
        scrollTo({
            top: 0,
            behavior: 'smooth',
          });     
    }
})