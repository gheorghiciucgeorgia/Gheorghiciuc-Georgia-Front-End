// Seting the deadline
const deadline = new Date("aug 30, 2021 18:00:00").getTime();

//the tags where we will write over
const timespans = document.querySelectorAll(".release span");

// Renewing every second
let x = setInterval(() => {

	// Calculating the  remaining time
	let now = new Date().getTime();

	let remaining = deadline - now;

	if (remaining <= 0) {
		remaining = 0;
	}

	let months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30.5));
	let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
	let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

	// adding the  zeros and showing the remaining time

	let time = [months, days, hours, minutes, seconds];

	for (let i = 0; i < time.length; i++) {

		if (time[i] >= 0 && time[i] < 10) {
			timespans[i].innerText = "0" + time[i].toString();
		} else {
			timespans[i].innerText = time[i].toString();
		}

	}

}, 1000);

//Submit script
const emailSubscribe = document.getElementById("email");
const subscribeButton = document.getElementById("subscribe");

subscribeButton.addEventListener("click", (e) => {

	e.preventDefault();

	// Checking email if is valid
	if (emailSubscribe.validity.valid === true) {

		// Get emails count to form new id
		firebase.database().ref("/emails")
		.once('value', snap => {

			let newID = snap.val().length;

			firebase.database().ref(`/emails/${newID}`)
			.update({
				email: emailSubscribe.value
			});

		});

		alert(`Subscribed with email ${emailSubscribe.value}. Thank you!`);

	}
	else {
		alert("Email is not valid.");
	}

}, true);