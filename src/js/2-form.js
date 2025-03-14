const formData = {
  email: '',
  message: '',
};

const LSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

const savedData = localStorage.getItem(LSTORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(LSTORAGE_KEY, formData);
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LSTORAGE_KEY);
  formData.email = '';
  formData.message = '';

  form.reset();
}

// populateTextarea();

// Обробка сабміту форми
// form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', onFormMessage);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const form = event.currentTarget;

//   const { email, message } = form.elements;

//   const formData = {
//     userEmail: email.value,
//     userMessage: message.value,
//   };

//   console.log(formData);

//   localStorage.removeItem(LSTORAGE_KEY);
//   form.reset();
// }

// function onFormMessage(event) {
//   const msg = event.target.value;
//   localStorage.setItem(LSTORAGE_KEY, msg);
// }

// function populateTextarea() {
//   textarea.value = localStorage.getItem(LSTORAGE_KEY) ?? '';
// }
