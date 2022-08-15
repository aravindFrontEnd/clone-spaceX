const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu')

const counters = document.querySelectorAll('.counter')


let scrollStarted = true;

btn.addEventListener('click', toggleFunction)
document.addEventListener('scroll', scrollPage)

function toggleFunction() {
  btn.classList.toggle('open')
  overlay.classList.toggle('overlay-show')
  document.body.classList.toggle('hide-scroll')
  menu.classList.toggle('show-menu')
}

function scrollPage() {
  const scrollPos = window.scrollY
  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target')

      const c = +counter.innerText

      // create an increment
      const increment = target / 30;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 75)
      } else {
        counter.innerText = target
      }
    }
    updateCounter()
  })
}


function reset(){
    counters.forEach((counter)=>{
        counter.innerHTML = '0';
    })
}

