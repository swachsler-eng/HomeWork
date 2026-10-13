/* global $*/

const contactsTable = $('#contactsTable tbody');
const addContactForm = $('#addContact');
const firstInput = $('#first');
const lastInput = $('#last');
const emailInput = $('#email');
const phoneInput = $('#phone');
const addContactButton = $('#add');
const addJsonButton = $('#jsonAdd');
let contacts = [];

function hideAddContactForm() {
  addContactForm.hide();

  //addContactForm[0].reset();
  addContactForm.trigger('reset');

  addContactButton.show();
}

addJsonButton.on('click', async () => {
  if (!contacts.length) {
    // contactsTable.html('');
    contactsTable.empty();
  };

   let p;
  try {
    const poeple = await fetch('poeple.json');
    console.log(poeple);
     p = await poeple.json();
    console.log(p);
  } catch (e){
    console.error(e);
  }
  p.forEach(person => {
    addContacts(person);
  }
  );
 //addContacts(p[0]);  
});
addContactForm.on('submit', e => {
  e.preventDefault();

  if (!contacts.length) {
    // contactsTable.html('');
    contactsTable.empty();
  };
 
  const newContact = {
    first: firstInput.val(),
    last: lastInput.val(),
    email: emailInput.val(),
    phone: phoneInput.val()
  };

 addContacts(newContact);


});

  function addContacts(newContact){
  contacts.push(newContact);

  const row = $(`<tr>
                  <td>${newContact.first}</td>
                  <td>${newContact.last}</td>
                  <td>${newContact.email}</td>
                  <td>${newContact.phone}</td>
                  <td><button>delete</button></td>
              </tr>`);
    contactsTable.append(row);

  row.find('button').click(() => {
    row.remove();

    contacts = contacts.filter(c => c !== newContact);

    if (!contacts.length) {
      contactsTable.html(`<tr>
          <td colspan="5">no contacts loaded</td>
        </tr>`);
    }
  });

  hideAddContactForm();
};

addContactButton.click(() => {
  addContactForm.show();
  addContactButton.hide();
});

$('#cancel').click(hideAddContactForm);
