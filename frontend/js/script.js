const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Registration Successful");
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Login Successful");
    });
}

const seats = document.querySelectorAll(".seat");
const selectedText = document.getElementById("selectedSeats");
const totalPrice = document.getElementById("totalPrice");

let selected = [];
const seatPrice = 1500;

seats.forEach(seat => {

    if(seat.classList.contains("booked")){
        return;
    }

    seat.addEventListener("click", () => {

        seat.classList.toggle("selected");

        const seatNo = seat.innerText;

        if(selected.includes(seatNo)){
            selected =
            selected.filter(s => s !== seatNo);
        }
        else{
            selected.push(seatNo);
        }

        selectedText.innerText =
        "Selected Seats: " +
        selected.join(", ");

        totalPrice.innerText =
        "Total: Rs. " +
        (selected.length * seatPrice);
    });

});

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {
    button.addEventListener("click", () => {

        const busName = button.dataset.bus;

        localStorage.setItem("selectedBus", busName);

        window.location.href = "seats.html";
    });
});

const continueBtn =
document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    localStorage.setItem(
        "selectedSeats",
        JSON.stringify(selected)
    );

    window.location.href =
    "booking-summary.html";
});

const bus =
localStorage.getItem("selectedBus");

const seats =
JSON.parse(
    localStorage.getItem("selectedSeats")
);

document.getElementById("busName").innerText =
bus;

document.getElementById("seatNumbers").innerText =
seats.join(", ");