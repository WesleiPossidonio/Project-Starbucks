const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle')
    const navegation = document.querySelector('.navegation')
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
  }


const imgSlider = (anything) => {
    document.querySelector('.starbucks').src = anything
}

const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle')
    circle.style.background = color

}





