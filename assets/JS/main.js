/*=====faq=====*/

const buttonFaq = document.querySelector('.faq__button');
const buttonFaq2 = document.querySelector('.faq__button2');
const buttonFaq3 = document.querySelector('.faq__button3');
const buttonFaq4 = document.querySelector('.faq__button4');
const buttonFaq5 = document.querySelector('.faq__button5');

const answer = document.querySelector('.faq__question--answer');
const answer2 = document.querySelector('.faq__question--answer2');
const answer3 = document.querySelector('.faq__question--answer3');
const answer4 = document.querySelector('.faq__question--answer4');
const answer5 = document.querySelector('.faq__question--answer5');

buttonFaq.addEventListener('click', () => {
    answer.classList.toggle('faq__question--answer-actv')
});

buttonFaq2.addEventListener('click', () => {
    answer2.classList.toggle('faq__question--answer-actv')
});

buttonFaq3.addEventListener('click', () => {
    answer3.classList.toggle('faq__question--answer-actv')
});

buttonFaq4.addEventListener('click', () => {
    answer4.classList.toggle('faq__question--answer-actv')
});

buttonFaq5.addEventListener('click', () => {
    answer5.classList.toggle('faq__question--answer-actv')
});

/*---------------------*/

buttonFaq.addEventListener('click', () => {
    buttonFaq.classList.toggle('faq__button--close')
});

buttonFaq2.addEventListener('click', () => {
    buttonFaq2.classList.toggle('faq__button--close')
});

buttonFaq3.addEventListener('click', () => {
    buttonFaq3.classList.toggle('faq__button--close')
});

buttonFaq4.addEventListener('click', () => {
    buttonFaq4.classList.toggle('faq__button--close')
});

buttonFaq5.addEventListener('click', () => {
    buttonFaq5.classList.toggle('faq__button--close')
});

const faqQuestion = document.querySelector('.faq__questions--item');
const faqQuestion2 = document.querySelector ('.faq__questions--item2');
const faqQuestion3 = document.querySelector ('.faq__questions--item3');
const faqQuestion4 = document.querySelector ('.faq__questions--item4');
const faqQuestion5 = document.querySelector ('.faq__questions--item5');

buttonFaq.addEventListener('click', () => {
    faqQuestion.classList.toggle('faq__questions--item-actv')
});

buttonFaq2.addEventListener('click', () => {
    faqQuestion2.classList.toggle('faq__questions--item-actv')
});

buttonFaq3.addEventListener('click', () => {
    faqQuestion3.classList.toggle('faq__questions--item-actv')
});

buttonFaq4.addEventListener('click', () => {
    faqQuestion4.classList.toggle('faq__questions--item-actv')
});

buttonFaq5.addEventListener('click', () => {
    faqQuestion5.classList.toggle('faq__questions--item-actv')
});

