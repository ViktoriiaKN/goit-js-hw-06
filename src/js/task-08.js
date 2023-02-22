const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (Object.values(data).some(value => !value)) {
    alert('All fields are required!');
  } else {
    console.log(data);
    event.target.reset();
  }
}

