const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    // Заповнюємо об’єкт formData (переконуємось, що undefined не підставляється)
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    // Заповнюємо поля форми
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.error('Error parsing feedback form data:', error);
  }
}

// Використовуємо делегування подій для прослуховування змін у формі
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    // Зберігаємо значення без пробілів на краях
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

// Обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевіряємо, чи всі поля заповнені
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виводимо об’єкт formData у консоль
  console.log(formData);

  // Очищуємо локальне сховище
  localStorage.removeItem('feedback-form-state');

  // Очищуємо об’єкт formData
  formData.email = '';
  formData.message = '';

  // Очищуємо поля форми
  form.reset();
});
