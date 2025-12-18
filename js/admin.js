// const logOutBtnEl = document.querySelector(".logout-btn");
// const activeEl = document.querySelector(".active");
// const viewRoomsEl = document.querySelector(".view-rooms");
// const viewResEl = document.querySelector(".view-res");
// const addRoomEl = document.querySelector(".addrooms");

let rooms = [];
let reservations = [];

function openSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document
    .querySelectorAll(".sidebar button")
    .forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");
}

// IMAGE PREVIEW
roomImage.onchange = (e) => {
  const file = e.target.files[0];
  if (file) preview.src = URL.createObjectURL(file);
};

function addRoom() {
  const room = {
    image: preview.src,
    name: roomName.value,
    desc: roomDesc.value,
    price: roomPrice.value,
    type: roomType.value,
  };
  //   const newRoomCard = `      <div class="room-card">
  //           <img
  //             src="./images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
  //             alt="Deluxe Room"
  //             onclick="openImage(this.src)"
  //           />
  //           <div class="room-content">
  //             <h3>${room.name}</h3>
  //             <p>${room.desc}</p>
  //             <div class="amenities">
  //               <div class="amenity">
  //                 <img src="./images/iconmonstr-wireless-7-240.png" class="icon" />
  //                 Wifi
  //               </div>
  //               <div class="amenity">🚿 Bathroom</div>
  //               <div class="amenity">❄️ AC</div>
  //             </div>
  //             <div class="price">UGX${room.price} / night</div>
  //             <button
  //               class="btn btn-primary"
  //               onclick="goToPayment('Deluxe Room', 150, 'images/room1.jpg')"
  //             >
  //               Book Now
  //             </button>
  //           </div>
  //         </div>`;
  //   roomsContainerEl.innerHTML += newRoomCard;

  rooms.push(room);
  loadRooms();
}

function loadRooms() {
  roomsTable.innerHTML = "";
  rooms.forEach((r, i) => {
    roomsTable.innerHTML += `
        <tr>
          <td><img src="${r.image}" width="60"></td>
          <td>${r.name}</td>
          <td>${r.type}</td>
          <td>$${r.price}</td>
          <td><button class="delete-btn" onclick="deleteRoom(${i})">Delete</button></td>
        </tr>
      `;
  });
}

function deleteRoom(i) {
  rooms.splice(i, 1);
  loadRooms();
}

function loadReservations() {
  reservationTable.innerHTML = "";
  reservations.forEach((r) => {
    reservationTable.innerHTML += `
        <tr>
          <td>${r.room}</td>
          <td>${r.in}</td>
          <td>${r.out}</td>
          <td>${r.guests}</td>
          <td>${r.phone}</td>
        </tr>
      `;
  });
}

function logout() {
  localStorage.removeItem("token");
  location.href = "index.html";
}
