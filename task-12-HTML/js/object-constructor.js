<<<<<<< HEAD
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function (){
    return this.rooms -this.booked;
}
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
=======
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function (){
    return this.rooms -this.booked;
}
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elRooms.textContent = hotel.checkAvailability();