const submitBtn = document.getElementById('submitBtn');
const table = document.querySelector('.table');

const addPatientBtn = document.getElementById('add-patient');
const closePopup = document.querySelector('.close');
const outerPopup = document.querySelector('.outer-popup');
const overlay = document.querySelector('.overlay');

addPatientBtn.addEventListener('click', () => {
  outerPopup.style.display = 'flex';
  overlay.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  outerPopup.style.display = 'none';
  overlay.style.display = 'none';
});

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
  console.log();
  const nameInput = document.getElementById('patient-name');
  const phoneInput = document.getElementById('patient-phone');
  const genderInput = document.querySelector('input[name="patientGender"]:checked');
  const selectDoctor = document.getElementById('doctors');
  const doctorInput = selectDoctor.options[selectDoctor.selectedIndex];

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
