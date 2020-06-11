let selectedColor = 'black';
let colors = [
  '#efefef',
  '#d2d2d2',
  '#b7b7b7',
  '#898989',
  '#696969',
  '#404040',
  '#202020',
  '#0d0d0d',
  '#29ff59',
  '#ff29ec',
  '#29f9ff',
  '#ff9829'
];

document.addEventListener('DOMContentLoaded', function () {
  // select palette
  let palette = document.querySelector('#palette');
  let paint

  function changeSelected(event) {
    selectedColor = event.target.style.backgroundColor
  }
  
  for (let i = 0; i < colors.length; i++) {
    paint = document.createElement('span')
    paint.style.backgroundColor = colors[i]
    paint.addEventListener('click', changeSelected)

    palette.appendChild(paint)
  }
  
  let canvas = document.querySelector('#canvas');
  let pixel;

  function changeColor(event) {
    event.target.style.backgroundColor = selectedColor;
  }



  for (let i = 0; i < 3600; i++) {
    pixel = document.createElement('span');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);

    pixel.addEventListener('click', changeColor);
  }
});
