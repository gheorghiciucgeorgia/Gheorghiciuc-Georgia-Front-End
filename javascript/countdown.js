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


//saving the emails into localStorage
let emails = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addEmails = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let email = {
                id: Date.now(),
                email: document.getElementById('email').value,
            }
            emails.push(email);
            document.forms[0].reset(); // to clear the form for the next entries
            
            //saving to localStorage
            localStorage.setItem('EmailsSubscribed', JSON.stringify(emails) );
			alert("Your email has been added with success!");
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('forSubscribe').addEventListener('click', addEmails);
        });