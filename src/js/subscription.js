// @ts-nocheck
import axios from 'axios';
import Notiflix from 'notiflix';

const subscriptionForm = document.querySelector('.subscribe-form');
const inputSubscr = document.querySelector('.footer-input');

subscriptionForm.addEventListener('submit', onSubscribe);

function onSubscribe(e) {
    e.preventDefault();
    const inputEmail = inputSubscr.value;
    console.log(inputEmail);
    subscribePost(inputEmail).then(() => {
        Notiflix.Notify.success('Subscription accepted');
        subscriptionForm.reset();
    }).catch((error) => {
        console.log(error);
        if(error.response.status === 409) {
            Notiflix.Notify.info('You have already subscribed');
        } else {
            Notiflix.Notify.failure('Error, server not answer');
        }
    }).finally(() => {
        subscriptionForm.reset();
    })
};

function subscribePost (email) {
 return axios.post('https://your-energy.b.goit.study/api/subscription', {email: email,});
};

Notiflix.Notify.init({
    position: 'center-top',
    messageMaxLength: 200,
    width: '300px',
  });