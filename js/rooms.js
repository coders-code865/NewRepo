const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openImage(src) {
  modalImg.src = src;
  imageModal.style.display = "flex";
}

function closeImage() {
  imageModal.style.display = "none";
}

function goToPayment(name, price, image) {
  const booking = {
    room: name,
    price: price,
    image: image,
  };

  localStorage.setItem("booking", JSON.stringify(booking));

  // Redirect to payment page
  window.location.href = "payment.html";
}

const bookingModal = document.getElementById("bookingModal");
const bookingImg = document.getElementById("bookingImg");
const bookingTitle = document.getElementById("bookingTitle");

//the rooms container
// export const roomsContainerEl = document.querySelector(".rooms-container");
