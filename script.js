'use strict'

const nav = document.querySelector('.nav')
const header = document.querySelector('.hero')
const callBack = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove('sticky')
    } else {
      nav.classList.add('sticky')
      nav.style.visibility = 'visible'
      nav.style.opacity = 1
    }
  })
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

const observer = new IntersectionObserver(callBack, options)

observer.observe(header)
