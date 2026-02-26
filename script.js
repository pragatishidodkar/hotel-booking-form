// Get elements
const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

// Set today's date as minimum for check-in
const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

// Update checkout's min date based on check-in
checkin.addEventListener("change", () => {
  checkout.value = "";
  checkout.setAttribute("min", checkin.value);
});

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkinDate = new Date(checkin.value);
  const checkoutDate = new Date(checkout.value);

  // Validate date logic
  if (checkoutDate <= checkinDate) {
    alert("⚠️ Check-out date must be after check-in date.");
    return;
  }

  // Optional: success message or redirect
  alert("✅ Booking successful!\nWe look forward to hosting you.");
  form.reset();
});
