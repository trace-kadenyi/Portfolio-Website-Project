// Validate Email Information
const emailInfo = document.querySelector('#email');
const getInTouch = document.querySelector('form');
const clientName = document.querySelector('#myName');
const clientMessage = document.querySelector('#message');
const feedbackMessage = document.querySelector('#validationMessage');

const saveFormData = (name, email, message) => {
  const formData = {
    userName: name,
    userEmail: email,
    userMessage: message,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

const getFormData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    clientName.value = formData.userName;
    emailInfo.value = formData.userEmail;
    clientMessage.value = formData.userMessage;
  }
};
getFormData();

const validateEmail = () => {
  getInTouch.addEventListener('submit', (e) => {
    const requiredChars = /^[a-z0-9@.]+$/;
    if (!requiredChars.test(emailInfo.value)) {
      feedbackMessage.textContent = 'Please enter your email in lowecase';
      feedbackMessage.style.color = 'red';
      feedbackMessage.style.fontWeight = 'bold';
      e.preventDefault();
    } else {
      saveFormData(clientName.value, emailInfo.value, clientMessage.value);
      feedbackMessage.textContent = 'Success!';
      feedbackMessage.style.color = 'green';
      feedbackMessage.style.fontWeight = 'bold';
    }
  });
};
validateEmail();
