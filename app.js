// const upBtn = document.querySelector(".up-button"),
//       downBtn = document.querySelector(".down-button"),
//       sidebar = document.querySelector(".sidebar"),
//       mainSlide = document.querySelector(".main-slide"),
//       slidesCount = mainSlide.querySelectorAll('div').length,
//       container = document.querySelector(".container");

// let activeSlidesIndex = 0;

// sidebar.style.top = `-${(slidesCount - 1) * 100}vh `;

// upBtn.addEventListener("click", () => {
//   changeSlide("up");
// });

// downBtn.addEventListener("click", () => {
//   changeSlide("down");
// });

// function changeSlide(direction){
//   if(direction === "up"){
//     activeSlidesIndex++;
//     if(activeSlidesIndex === slidesCount){
//       activeSlidesIndex = 0;
//     }
//   } else if(direction === 'down'){
//     activeSlidesIndex--;
//     if(activeSlidesIndex < 0){
//       activeSlidesIndex = slidesCount - 1;
//     }
//   }
//   const height = container.clientHeight;
//   mainSlide.style.transform = `translateY(-${activeSlidesIndex * height}px)`;
//   sidebar.style.transform = `translateY(${activeSlidesIndex * height}px)`;
// }

const upBtn = document.querySelector(".up-button"),
      downBtn = document.querySelector(".down-button"),
      slideBar = document.querySelector(".sidebar"),
      mainSlide = document.querySelector(".main-slide"),
      slidesCount = slideBar.querySelectorAll("div").length,
      container = document.querySelector(".container");

let activeSlidesIndex = 0;

slideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});
 
function changeSlide(direction){
  if(direction === "up"){
    activeSlidesIndex++;
    if(activeSlidesIndex === slidesCount){
      activeSlidesIndex = 0;
    }
  } else if(direction === 'down'){
    activeSlidesIndex--;
    if(activeSlidesIndex < 0){
      activeSlidesIndex = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlidesIndex * height}px)`;
  slideBar.style.transform = `translateY(${activeSlidesIndex * height}px)`;
}



// const startBtn = document.querySelector("#start"),
//       screens = document.querySelectorAll(".screen"),
//       timeList = document.querySelector("#time_list");

// let time = 0;

// startBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   screens[0].classList.add("up");
// });

// timeList.addEventListener("click", (e) => {
//   if(e.target.classList.contains("time-btn")){
//     time = parseInt(e.target.getAttribute("data-time"));
//     startGame();
//   }
// });

// function startGame(){
//   screens[1].classList.add("up");
// }