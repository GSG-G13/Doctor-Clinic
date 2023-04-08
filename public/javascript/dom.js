const createHTMLElement = (element, className, id, textContent) => {
  const item = document.createElement(element);

  if (className) item.className = className;
  if (id) item.id = id;
  if (textContent) item.textContent = textContent;

  return item;
};

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

// eslint-disable-next-line no-unused-vars
const createRow = (patient) => {
  const row = document.createElement('tr');

  const id = createHTMLElement('td', null, null, patient.id);
  const name = createHTMLElement('td', null, null, patient.name);
  const phone = createHTMLElement('td', null, null, patient.phone);
  const gender = createHTMLElement('td', null, null, patient.gender);
  const enteredAt = createHTMLElement('td', null, null, patient.entered_at);
  const doctor = createHTMLElement('td', null, null, patient.doctor_name);

  appendChildren(row, id, name, phone, gender, enteredAt, doctor);

  return row;
};

// eslint-disable-next-line no-unused-vars
const createOption = (doctor) => {
  const option = createHTMLElement('option', null, null, `${doctor.name}`);
  option.setAttribute('value', doctor.id);

  return option;
};
