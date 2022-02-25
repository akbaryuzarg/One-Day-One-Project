const boxs = document.querySelectorAll('.box')
// boxs.forEach((box) => {
//    box.addEventListener('click', () => {
//       removeActive();
//       box.classList.add('active');
//       console.log(box);
//    })
// })

// function removeActive() {
//    boxs.forEach((box) => {
//       box.classList.remove('active');
//    })
//

boxs.forEach((box) => {
   box.addEventListener('click', function () {
      this.classList.toggle('hover');
      console.log('work');
   })

   box.addEventListener('click', function () {
      this.classList.toggle('active');
   })
})
