<<<<<<< HEAD
var hotel = {
    name : ' Park',
    rooms : 120,
    booked : 77,
};

hotel.gym = true;
hotel.pool = false;
delete  hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent= hotel.name;

var elPool= document.getElementById('pool');
elPool.textContent= hotel.pool;

var elGym = document.getElementById('gym');
=======
var hotel = {
    name : ' Park',
    rooms : 120,
    booked : 77,
};

hotel.gym = true;
hotel.pool = false;
delete  hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent= hotel.name;

var elPool= document.getElementById('pool');
elPool.textContent= hotel.pool;

var elGym = document.getElementById('gym');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elGym.textContent= hotel.gym;