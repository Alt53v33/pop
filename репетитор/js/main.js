const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.addEventListener('click', () => {
  console.log('hi');
  // document.querySelector('.nav').classList.toggle('hidden')
  let nav = document.querySelector('.nav');
  if(nav.style.maxHeight) {
    nav.style.maxHeight = null;

  }else {
    nav.style.maxHeight = nav.scrollHeight + "px";
  }
})
console.log(document.querySelector('.nav'));

console.log(mobileMenu)