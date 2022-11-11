const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });




  const menu = document.querySelector('.menu');
  const openMenu = document.querySelector('.openMenu')
  const closeMenu = document.querySelector('.closeMenu')

  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);

  function show() {
    menu.style.display = 'flex';
    menu.style.top = '0';
  }

  function close() {
    menu.style.top = ('-1000%');
  }