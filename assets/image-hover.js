/* ========== IMAGE-ON-HOVER DISPLAY  ======== */

const imageSelect = "https://i.pinimg.com/736x/37/f1/6f/37f16f7ff7ba83b727d1a80b753eccf4.jpg"
const items = document.querySelectorAll('.image-row');
const image = document.querySelector('.image-reveal');

// Set the default image on page load
image.setAttribute('src', imageSelect);

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    if (!e.currentTarget.classList.contains('active')) {
      const imageData = e.currentTarget.getAttribute('data-image');
      image.setAttribute('src', imageData);
    }
  });

  el.addEventListener('mouseleave', (e) => {
    if (!e.currentTarget.classList.contains('active')) {
      image.setAttribute('src', imageSelect); // Revert to default image on mouse leave
    }
  });

 
});