const bouton = document.getElementById("bouton");
const donnees = document.getElementById("donnees");

const url = "http://www.filltext.com/?rows=10&prenom={firstName}&nom={lastName}";

bouton.addEventListener("click", () => {
    fetch(url).then(
        (reponse) => {
            console.log(reponse);
        }
    );

    donnees.innerText = "Test";
});
