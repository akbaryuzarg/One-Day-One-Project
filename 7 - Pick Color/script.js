const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  console.log(rgbToHex(r, g, b));
  let hexCode = rgbToHex(r, g, b);
  let h2HexCode = document.querySelector('.hexCode h2')
  h2HexCode.innerHTML = hexCode;
});

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');
sRed.addEventListener('input', function() {
  let r = parseInt(sRed.value);
  let g = parseInt(sGreen.value);
  let b = parseInt(sBlue.value);
  console.log(r + ',' + g + ',' + b);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  console.log(rgbToHex(r, g, b));
  let hexCode = rgbToHex(r, g, b);
  let h2HexCode = document.querySelector('.hexCode h2')
  h2HexCode.innerHTML = hexCode;
});
sGreen.addEventListener('input', function() {
  let r = parseInt(sRed.value);
  let g = parseInt(sGreen.value);
  let b = parseInt(sBlue.value);
  console.log(r + ',' + g + ',' + b);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  console.log(rgbToHex(r, g, b));
  let hexCode = rgbToHex(r, g, b);
  let h2HexCode = document.querySelector('.hexCode h2')
  h2HexCode.innerHTML = hexCode;
});
sBlue.addEventListener('input', function() {
  let r = parseInt(sRed.value);
  let g = parseInt(sGreen.value);
  let b = parseInt(sBlue.value);
  console.log(r + ',' + g + ',' + b);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  console.log(rgbToHex(r, g, b));
  let hexCode = rgbToHex(r, g, b);
  let h2HexCode = document.querySelector('.hexCode h2')
  h2HexCode.innerHTML = hexCode;
});


