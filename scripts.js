// const canvas = document.querySelector("canvas")
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// console.log(canvas);

// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles-js config loaded');
//   });

  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  const closeMenu = document.querySelector(".closeMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    console.log(hamburger)
  })
  // closeMenu.addEventListener("click", close);

  // function show() {
  //   menu.style.display = "flex";
  //   menu.style.top = "0";
  // }

  // function close() {
  //   menu.style.top = "-100%";
  // }