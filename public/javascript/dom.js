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
  const Actions = createHTMLElement('td');

  const editLink = createHTMLElement('a', 'btn border-shadow update');
  editLink.setAttribute('href', '/update-user?id=4');
  const editSpan = createHTMLElement('span', 'text-gradient');
  appendChildren(editLink, editSpan);
  const editIcon = createHTMLElement('i', 'fas fa-pencil-alt');
  appendChildren(editSpan, editIcon);

  const deleteLink = createHTMLElement('a', 'btn border-shadow delete');
  deleteLink.setAttribute('href', '/update-user?id=4');
  const deleteSpan = createHTMLElement('span', 'text-gradient');
  appendChildren(deleteLink, deleteSpan);
  const deleteIcon = createHTMLElement('i', 'fa-solid fa-trash');
  appendChildren(deleteSpan, deleteIcon);

  appendChildren(Actions, editLink, deleteLink);

  appendChildren(row, id, name, phone, gender, enteredAt, doctor, Actions);

  return row;
};

// eslint-disable-next-line no-unused-vars
const createOption = (doctor) => {
  const option = createHTMLElement('option', null, null, `${doctor.name}`);
  option.setAttribute('value', doctor.id);

  return option;
};
