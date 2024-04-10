function openSideBar(event) {
    var sidebar = document.querySelector(".sidebars");
    sidebar.style.display = 'block';
    
    // Prevent the default action of the anchor tag
    event.preventDefault(); // Add this line
}

function closeSideBar(event) {
    var sidebar = document.querySelector(".sidebars");
    sidebar.style.display = 'none';
    
    // Prevent the default action of the anchor tag
    event.preventDefault(); // Add this line
}


function popuphighlight(event) {

  let screenWidth = window.innerWidth;
  console.log("Screen width:", screenWidth);
  var highlight = document.querySelector(".highlights");
  var description = document.querySelector(".description");
  var gallery = document.querySelector(".gallery");
  var high= document.querySelector(".high");
  var gall = document.querySelector(".gall");
  var descrip = document.querySelector(".descrip");
  highlight.style.display = "flex";
  description.style.display="none";
  gallery.style.display="none";
  descrip.style.borderBottom="none";
  gall.style.borderBottom="none";
  // descrip.style.borderLeft="none";
  // gall.style.borderLeft="none";
  // if(screenWidth>500){
    
  high.style.borderBottom="3px solid rgb(65,119,3)";
  // }else{
    
  //   high.style.borderLeft="3px solid rgb(65,119,3)";
  // }
  event.preventDefault();
}  

function popupdescription(event) {
  let screenWidth = window.innerWidth;
  var highlight = document.querySelector(".highlights");
  var description = document.querySelector(".description");
  var gallery = document.querySelector(".gallery");
  var descrip= document.querySelector(".descrip");
  var gall = document.querySelector(".gall");
  var high= document.querySelector(".high");
  gall.style.borderBottom="none";
  high.style.borderBottom="none";
  highlight.style.display = "none";
  description.style.display="flex";
  gallery.style.display="none";
  gall.style.borderBottom="none";
  high.style.borderBottom="none";
  // gall.style.borderLeft="none";
  // high.style.borderLeft="none";
  // if(screenWidth>500){
    
  descrip.style.borderBottom="3px solid rgb(65,119,3)";
  // }else{
    
  //   descrip.style.borderLeft="3px solid rgb(65,119,3)";
  // }
  event.preventDefault();
}  

function popupgallery(event) {
  let screenWidth = window.innerWidth;
  var highlight = document.querySelector(".highlights");
  var description = document.querySelector(".description");
  var gallery = document.querySelector(".gallery");
  var gall = document.querySelector(".gall")
  var descrip = document.querySelector(".descrip")
  var high= document.querySelector(".high")
  highlight.style.display = "none";
  description.style.display="none";
  gallery.style.display="flex";
  descrip.style.borderBottom="none"; 
  high.style.borderBottom="none";
  // descrip.style.borderLeft="none";
  // high.style.borderLeft="none";
  // if(screenWidth>500){
    gall.style.borderBottom="3px solid rgb(65,119,3)";
  // }else{
  //   gall.style.borderLeft="3px solid rgb(65,119,3)";
  // }
  event.preventDefault();
} 

window.addEventListener("load", () => {
  const lazyLoad = document.querySelector(".lazyLoad");
  lazyLoad.src = lazyLoad.dataset.src;
  lazyLoad.addEventListener("load", () =>
    lazyLoad.classList.remove("lazyLoad")
  );
});

let slider = document.querySelector(".divslidegallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

nextbtn.addEventListener("click",()=>{
  slider.scrollLeft+=900;
  checkSliderPosition() 
});

backbtn.addEventListener("click",()=>{
  slider.scrollLeft-=900;
  checkSliderPosition() 
});

function checkSliderPosition() {
  if (slider.scrollLeft === slider.scrollWidth - slider.clientWidth) {
      // Slider has reached the end, reset to initial position
      slider.scrollLeft = 0;
  }
}


// slider.addEventListener("wheel", (evt)=>{
//   evt.preventDefault();
//   slider.scrollLeft+=evt.deltaY;
// });

// popup

// for popup form

function openPopup(event) {
  var popup = document.querySelector(".popup-overlay");
  popup.style.display = 'block';
  event.preventDefault();
}

function closePopup(event) {
  var popup = document.querySelector(".popup-overlay");
  popup.style.display = 'none';
  event.preventDefault();
}

function clearform(event){
  document.getElementById("form").reset();
}
