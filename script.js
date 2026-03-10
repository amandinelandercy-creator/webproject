// script.js - Ajoutez votre code JavaScript ici

// Exemple :
// document.addEventListener('DOMContentLoaded', function() {
//     // Votre code ici
// });

document.addEventListener('DOMContentLoaded', function() {
    // Formulaire de contact : affichage uniquement sur contact.html
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message envoyé !');
            contactForm.reset();
        });
    }

    // Sélection du lien "Contact" dans le header
    const navLinks = document.querySelectorAll('header nav a');
    let contactLink = null;
    navLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase() === 'contact') {
            contactLink = link;
        }
    });

    // Affichage du formulaire au clic sur "Contact"
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
