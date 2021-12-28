// GLOBAL VARIABLES
const slideContainer = document.querySelector(".slide-container");
const slideImage = document.querySelectorAll(".slide-image");
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length; //shows the total number of images
let slideWidth = slideImage[0].clientWidth; //calculates the width of the 1st slide image
let currentSlide = 0;

//SLIDER SET-UP

function initiate (){
    /*
    slideImage[0]=0
    slideImage[1]=100%
    slideImage[2]=200%
    */
   
    /*Going through the slide images, 
      set the left image to 0%, 
      set the next image to 100%,
      set the last image to 200%.
    */
    
    slideImage.forEach((img, i) => {
        img.style.left= i * 100 + "%"           
    });

    slideImage[0].classList.add("active"); 
    //adding the "active" class to the 1st slide image

    //CALLBACK FUNCTION FOR NAVIGATION DOTS
    createNavigationDots();
    
};

//CALLBACK FUNCTION 
initiate();

//NAVIGATION DOTS FUNCTION
function createNavigationDots(){

    for(let i=0; i < numberOfImages; i++){
        //creating HTML element of "div"
        const dot = document.createElement("div"); 
        //adding "single dot" class to the variable "dot"
        dot.classList.add("single-dot") 
        //adding the child element "dot" to the parent element "navigationDots"
        navigationDots.appendChild(dot) 
       //EVENT LISTENER FOR NAVIGATION DOTS
        dot.addEventListener("click", () => {
            nextSlide(i);
        });
    };
   
    navigationDots.children[0].classList.add("active") //first navigation dot is active

}; 

//NEXT BUTTON EVENT LISTENER TO MOVE SLIDE CONTAINER TO THE LEFT
//WHEN THE "NEXT BUTTON" IS CLICKED
nextButton.addEventListener("click", () => {
    //if the slideshow is at the last image
    //cycle back to the 1st image
    if(currentSlide >= numberOfImages-1){
        nextSlide(0);
        return
    }
    currentSlide++;//add one to the current slide
    nextSlide(currentSlide);
});

//PREVIOUS BUTTON EVENT LISTENER THAT WILL 
//SLIDE CONTAINER TO THE RIGHT WHEN CLICKED
previousButton.addEventListener("click", () =>{
    //go back to previous image of slideshow
    if(currentSlide <= 0){
        nextSlide(numberOfImages-1);
        return
    }
    currentSlide--;//subtract one from current slide
    nextSlide(currentSlide);

});

//CALLBACK FUNCTION TO MOVE TO THE NEXT SLIDE ACROSS THE X-AXIS
function nextSlide (slideNumber){
    slideContainer.style.transform=
    "translateX(-" + slideWidth * slideNumber + "px)"
    currentSlide=slideNumber;
    setActiveClass();
};

//SET ACTIVE CLASS 
function setActiveClass(){
    //slide image
    let currentActive = document.querySelector(".slide-image.active");
    //attaching "slide image active" class to currentActive variable
    currentActive.classList.remove("active");//remove the active class
    slideImage[currentSlide].classList.add("active");//add active class to the slide image that is active


    let currentDot = document.querySelector(".single-dot.active");
    //attaching "single dot active" class to currentActive variable
    currentDot.classList.remove("active");//remove the active class
    navigationDots.children[currentSlide].classList.add("active");

};





