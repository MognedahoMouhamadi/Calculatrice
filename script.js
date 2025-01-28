import { evaluate } from './math.mjs';



// Gère les clics sur les boutons
document.querySelector('.calc_buttons').addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (value === "=") {
        // Évalue l'expression mathématique
        try {
            expression = evaluate(expression).toString();
        } catch (err) {
            expression = "Erreur";
        }
    } else if (value === "C") {
        // Réinitialise l'expression
        expression = "";
    } else {
        // Ajoute le bouton cliqué à l'expression
        expression += value;
    }

    // Met à jour l'écran
    screen.innerText = expression || "0";
});
