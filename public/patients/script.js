const submitBtn = document.getElementById('submitBtn');

fetch('/patient')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

submitBtn.addEventListener('click', () => {
  const nameInput = document.getElementById('name-input');
  const phoneInput = document.getElementById('phone-input');
  const genderInput = document.getElementById('gender-input');
  const doctorInput = document.getElementById('doctor-input');

  fetch('/patient', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      patientName: nameInput.value,
      patientPhone: phoneInput.value,
      patientGender: genderInput.value,
      doctorId: doctorInput.value,
    }),
  })
  .then((data) => console.log(data.patient));

  nameInput.value = '',
  phoneInput.value = '',
  genderInput.value = '',
  doctorInput.value = '',
});

