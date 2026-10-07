const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for choosing Glow Beauty Salon!\n\n" +
        "Your appointment request has been received."
    );

    appointmentForm.reset();

});