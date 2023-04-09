const submitBtn = document.getElementById('submitBtn');
const table = document.querySelector('.table');

const addPatientBtn = document.getElementById('add-patient');
const closePopup = document.querySelector('.close');
const outerPopup = document.querySelector('.outer-popup');
const overlay = document.querySelector('.overlay');

const selectDoctor = document.getElementById('doctors');
const nameInput = document.getElementById('patient-name');
const phoneInput = document.getElementById('patient-phone');
// const genderInput = document.querySelector('input[name="patientGender"]:checked');

fetch('/doctors')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((doctor) => {
      // eslint-disable-next-line no-undef
      const doctorOption = createOption(doctor);
      selectDoctor.appendChild(doctorOption);
    });
  });

addPatientBtn.addEventListener('click', () => {
  outerPopup.style.display = 'flex';
  overlay.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  outerPopup.style.display = 'none';
  overlay.style.display = 'none';

  nameInput.value = '';
  phoneInput.value = '';
  // genderInput.value = '';
  selectDoctor.value = '';
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
  const doctorInput = selectDoctor.options[selectDoctor.selectedIndex];
  const genderInput = document.querySelector('input[name="patientGender"]:checked');

  if (nameInput.value === '' || genderInput.value === '' || doctorInput.value === '' || phoneInput.value === '') {
    alert('Please Add Data For The Patient');
    return;
  }
  fetch('/patient', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      patientName: nameInput.value,
      patientPhone: +phoneInput.value,
      patientGender: genderInput.value,
      doctorId: +doctorInput.getAttribute('value'),
    }),
  }).then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      const line = createRow(data.data);
      table.appendChild(line);
    });
  outerPopup.style.display = 'none';
  overlay.style.display = 'none';

  nameInput.value = '';
  phoneInput.value = '';
  genderInput.value = '';
  selectDoctor.value = '';
});
