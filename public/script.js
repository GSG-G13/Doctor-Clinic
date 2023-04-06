const submitBtn = document.getElementById('submitBtn');
const table = document.querySelector('.table');

fetch('/patient')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((patient) => {
      // eslint-disable-next-line no-undef
      const line = createRow(patient);
      table.appendChild(line);
    });
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
  }).then((res) => res.json())
    .then((data) => {
      data.forEach((patient) => {
        // eslint-disable-next-line no-undef
        const line = createRow(patient);
        table.appendChild(line);
      });
    });

  nameInput.value = '';
  phoneInput.value = '';
  genderInput.value = '';
  doctorInput.value = '';
});
