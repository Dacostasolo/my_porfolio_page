'use strict'

const nav = document.querySelector('.nav')
const header = document.querySelector('.hero')
const aboutImage = document.querySelectorAll('.about-item__image')
const overlay = document.querySelectorAll('.overlay')

//implementing sticky navigation bar
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

let counter = 0
const aboutCallBack = function (entries,observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      overlay[counter++].classList.add('about-item--visible')
      observer.unobserve(entry)
    }
  })
}

const aboutOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

const aboutImageObserver = new IntersectionObserver(aboutCallBack, aboutOptions)

aboutImage.forEach((image) => {
  aboutImageObserver.observe(image)
})
