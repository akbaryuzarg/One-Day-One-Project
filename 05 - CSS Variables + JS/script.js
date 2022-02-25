const controllers = document.querySelectorAll(".data-input input");

function handleUpdate() {
   // dataset = return semua data yg ada di tag html
   // di kasus ini data-sizing
   const suffix = this.dataset.sizing || '';
   // pilih "document" agar nge update style nya di seluruh html nya
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controllers.forEach(controller => {
   controller.addEventListener('change', handleUpdate);
});

controllers.forEach(controller => {
   controller.addEventListener('mousemove', handleUpdate);
});