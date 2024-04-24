function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNo = document.createElement('p');
    phoneNo.textContent = 'Phone: +39 999 999 999';

    const email = document.createElement('p');
    email.textContent = 'cocobyangela@cocobyangela.com'

    const address = document.createElement('p');
    address.textContent = 'Via del Viminale, 50, 00184 Roma RM, Italy'

    contact.appendChild(phoneNo);
    contact.appendChild(email);
    contact.appendChild(address);

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact()); 
}

export default loadContact;