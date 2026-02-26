document.getElementById("bookingForm").addEventListener("submit", function(e) {

    let checkin = new Date(document.getElementById("checkin").value);
    let checkout = new Date(document.getElementById("checkout").value);

    if (checkout <= checkin) {
        alert("Check-out date must be after check-in date!");
        e.preventDefault();
    }
});
