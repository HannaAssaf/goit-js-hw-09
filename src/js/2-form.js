const formData = {
  email: '',
  message: '',
};

const LSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(LSTORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.error('Error parsing stored data:', error);
  }
}

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value.trim();
    localStorage.setItem(LSTORAGE_KEY, JSON.stringify(formData));
  }
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
