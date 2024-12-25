function adjustLayout() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const body = document.body;

    if (width < 600) {
        body.className = 'small-screen';
    } else if (width >= 600 && width < 1024) {
        body.className = 'medium-screen';
    } else {
        body.className = 'large-screen';
    }

    console.log(`Width: ${width}, Height: ${height}`);
}

// Adjust layout on initial load
adjustLayout();

// Adjust layout on window resize
window.addEventListener('resize', adjustLayout);

// var fullimgbox = document.querySelector("#fullimgbox");
// var fullimg = document.querySelector("#fullimg");

// function openFullImg(pic) {
//     fullimgbox.style.display = "flex";
//     fullimg.src = pic;
// }

// function closeFullImg() {
//     fullimgbox.style.display = "none"
// }

const headerSC = () => {
  // const header = document.querySelector(".js-header");

  window.addEventListener("scroll", function(){
    if(this.scrollY > 0){
    // document.querySelector(".wrapper") .style.position = "fixed"
      
  }else{
    document.querySelector(".js-header") .style.position = "static"
  }
  })
}
headerSC();

// document.querySelector(".whole-body") .addEventListener("scroll", function(){
//   document.querySelector(".wrapper") .style.position = "fixed"
// })

// alert("hello world")
              