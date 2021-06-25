<<<<<<< HEAD
(function () {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
=======
(function () {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
    specialRate = document.getElementById('specialRate');}