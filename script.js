document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const fileInput = document.getElementById('carte');
    const fileNameDisplay = document.querySelector('.file-name');

    // Afficher le nom du fichier sélectionné
    fileInput.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            const maxSize = 5 * 1024 * 1024; // 5 Mo

            if (file.size > maxSize) {
                alert('Le fichier est trop volumineux. La taille maximale est de 5 Mo.');
                this.value = '';
                fileNameDisplay.textContent = 'Cliquez pour choisir un fichier (Photo ou PDF)';
                fileNameDisplay.classList.remove('selected');
                return;
            }

            fileNameDisplay.textContent = file.name;
            fileNameDisplay.classList.add('selected');
        } else {
            fileNameDisplay.textContent = 'Cliquez pour choisir un fichier (Photo ou PDF)';
            fileNameDisplay.classList.remove('selected');
        }
    });

    // Validation avant soumission
    form.addEventListener('submit', function (e) {
        const nom = document.getElementById('nom').value.trim();
        const postnom = document.getElementById('postnom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const telephone = document.getElementById('telephone').value.trim();
        const promotion = document.getElementById('promotion').value;
        const theme = document.getElementById('theme').value;
        const carte = fileInput.files[0];
        const conditions = document.getElementById('conditions').checked;

        if (!nom || !postnom || !prenom || !email || !telephone || !promotion || !theme) {
            e.preventDefault();
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        if (!carte) {
            e.preventDefault();
            alert('Veuillez télécharger votre carte d\'étudiant.');
            return;
        }

        if (!conditions) {
            e.preventDefault();
            alert('Veuillez accepter les conditions de participation.');
            return;
        }

        // Tout est bon → le formulaire s'envoie via FormSubmit.co
        // → l'étudiant sera redirigé automatiquement vers le groupe WhatsApp
    });
});
