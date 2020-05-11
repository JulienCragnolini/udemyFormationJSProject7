// Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons pas un calcul.
let restart = false; 
do {    
    // Demande un choix de programme
    do {
        var choice = prompt('Choissisez un programme\n\nAddition = 1\nSoustraction = 2 \nDivision = 3 \nMultiplication = 4\n');
    } while (choice != 1 && choice != 2  && choice != 3 && choice != 4)

    // Demande deux nombres
    do {
        var firstNbr = Number(prompt('Premier nombre :'));
        var secondNbr = Number(prompt('Second nombre :'));
    } while (isNaN(firstNbr) || isNaN(secondNbr) || firstNbr == '' || secondNbr == '')

    // Appelle la fonction concernée
    try {
        switch (choice) {
            case '1':
                var result = addition(firstNbr, secondNbr);
                break;
            case '2':
                var result = soustraction(firstNbr, secondNbr);
                break;
            case '3':
                var result = division(firstNbr, secondNbr);
                break;
            case '4':
                var result = multiplication(firstNbr, secondNbr);
                break;
            default:
                throw new Error('Une erreur est survenue.');
        }    
        // Affiche le résultat
        alert(`Programme choisi : ${choice}\nPremier nombre : ${firstNbr}\nSecond nombre : ${secondNbr}\nRésultat : ${result}`);
    }
    catch(error) {
        // Affiche l'erreur
        alert(error); 
    }

    // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer.
    restart = confirm("Souhaitez-vous recommencer un calcul ?"); 
    
} while(restart)