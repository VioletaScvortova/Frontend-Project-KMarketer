import Swiper from 'swiper/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contact-form');

    let inputFullName = document.getElementById('inputFullName');
    let resultFullName = document.getElementById('resultFullName');

    let inputEmail = document.getElementById('inputEmail');
    let resultEmail = document.getElementById('resultEmail');

    let inputSelectDate = document.getElementById('inputSelectDate');
    let resultSelectDate = document.getElementById('resultSelectDate');

    let inputSelectTime = document.getElementById('inputSelectTime');
    let resultSelectTime = document.getElementById('resultSelectTime');

    let inputMessage = document.getElementById('inputMessage');
    let resultMessage = document.getElementById('resultMessage');

    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        let successColor = '#FFA62B';
        let errorColor = '#121831';

        let fullName = inputFullName.value;
        if (fullName === '' || fullName.length <= 2) {
            resultFullName.textContent = 'Please enter your name that is at least 3 characters long';
            resultFullName.style.color = errorColor;
        } else {
            resultFullName.textContent = `Hi, ${fullName}! Your fullname was successfully added`;
            resultFullName.style.color = successColor;
        }

        let email = inputEmail.value;
        if (email === '') {
            resultEmail.textContent = 'Please enter your email address';
            resultEmail.style.color = errorColor;
        } else {
            resultEmail.textContent = `Your email ${email} was successfully added`;
            resultEmail.style.color = successColor;
        }

        let date = inputSelectDate.value;
        if (date === '') {
            resultSelectDate.textContent = 'Please select a date to schedule a meeting';
            resultSelectDate.style.color = errorColor;
        } else {
            resultSelectDate.textContent = `Great choice! We will be happy to meet you ${date}`;
            resultSelectDate.style.color = successColor;
        }

        let time = inputSelectTime.value;
        if (time === 'select') {
            resultSelectTime.textContent = 'Please select time to schedule a meeting';
            resultSelectTime.style.color = errorColor;
        } else {
            resultSelectTime.textContent = '';
        }

        let message = inputMessage.value;
        if (message.length < 3) {
            resultMessage.textContent = 'Please write us about your business and the topics you would like to discuss';
            resultMessage.style.color = errorColor;
        } else {
            resultMessage.textContent = 'We received your message!';
            resultMessage.style.color = successColor;
        }
    }
});

new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
