//collecting the progress bars
var progressBars=document.querySelectorAll('.skill-progress>div');
//collecting the skill container
var skillsContainer=document.getElementById('skills-container');

window.addEventListener('scroll',checkScroll);
var animationDone=false;
//initalise the bars
function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
// calling initalise bars
initialiseBars();

// funtion to fill bars
function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';

        },8);
    }

}



function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if( !animationDone && coordinates.top<window.innerHeight){
        //if condition hits ...fire the animation
        animationDone=true;
        console.log('skill section Visible');
        //calling fillbars
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}
