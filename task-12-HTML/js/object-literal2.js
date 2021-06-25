<<<<<<< HEAD
var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
    checkAvailability : function (){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
=======
var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
    checkAvailability : function (){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elRooms.textContent = hotel.checkAvailability();