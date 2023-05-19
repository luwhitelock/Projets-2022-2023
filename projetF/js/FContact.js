//Creation de variables permettant d'effectuer des verifications sur les données fournies dans le formulaire de contact.
var formValid = document.getElementById("sendbutton");
var Surname = document.getElementById("surname");
var FalseSurname = document.getElementById("falsesurname");
var Name = document.getElementById("name");
var FalseName = document.getElementById("falsename");
var myRegexName = /^[a-zA-ZÀ-ÿ-\s]{2,50}$/;

var Email = document.getElementById("email");
var FalseEmail = document.getElementById("falsemail");
var myRegexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

var Sujet = document.getElementById("sujetmsg");
var FalseSujet = document.getElementById("falsesujetmsg");
var myRegexSujet = /^[a-zA-ZÀ-ÿ-\s]{5,}$/;

var Message = document.getElementById("message");
var FalseMessage = document.getElementById("falsemessage");
var myRegexMessage = /^[a-zA-ZÀ-ÿ0-9-\s.'?!,@$#\-_]{5,}$/; // Verification du nombre de caracteres dans le message et que les caractéres autorisés soient respectés.
formValid.addEventListener("click", validation);

function validation(e) {
  if (Surname.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son nom de famille.
    e.preventDefault();
    FalseSurname.textContent = "Veuillez renseigner votre nom.";
    FalseSurname.style.color = "red";
    Surname.style.border = "2px solid red";
  } else if (myRegexName.test(Surname.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseSurname.textContent =
      "Veuillez renseigner un nom valide (seuls les lettres, espaces et tirets sont autorisés).";
    FalseSurname.style.color = "red";
    Surname.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseSurname.textContent = "";
    Surname.style.border = "1px solid black";
  }

  if (Name.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son prénom.
    e.preventDefault();
    FalseName.textContent = "Veuillez renseigner votre prénom.";
    FalseName.style.color = "red";
    Name.style.border = "2px solid red";
  } else if (myRegexName.test(Name.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseName.textContent =
      "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    FalseName.style.color = "red";
    Name.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseName.textContent = "";
    Name.style.border = "1px solid black";
  }

  if (Email.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son adresse mail.
    e.preventDefault();
    FalseEmail.textContent = "Veuillez renseigner votre adresse mail.";
    FalseEmail.style.color = "red";
    Email.style.border = "2px solid red";
  } else if (myRegexEmail.test(Email.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseEmail.textContent =
      "Veuillez rentrer une adresse mail existante, sous forme exemple@domaine.fr.";
    FalseEmail.style.color = "red";
    Email.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseEmail.textContent = "";
    Email.style.border = "1px solid black";
  }

  var DateDeNaissance1 = new Date(document.getElementById("date").value);
  var FalseDate = document.getElementById("falsedate");
  var minDate = new Date("1910, 02, 01");
  var maxDate = new Date("2005, 02, 01");

  if (DateDeNaissance1 == "Invalid Date") {
    //Verifie si l'utilisateur a rentré sa date de naissance.
    e.preventDefault();
    FalseDate.textContent = "Veuillez renseigner votre date de naissance.";
    FalseDate.style.color = "red";
  } else if (DateDeNaissance1 < minDate) {
    e.preventDefault();
    FalseDate.textContent =
      "Votre date de naissance doit etre supérieure au 01/02/1910 si vous souhaitez vous inscrire.";
    FalseDate.style.color = "red";
  } else if (DateDeNaissance1 > maxDate) {
    e.preventDefault();
    FalseDate.textContent =
      "Votre date de naissance doit etre inferieure au 01/02/2005 si vous souhaitez vous inscrire.";
    FalseDate.style.color = "red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseDate.textContent = "";
  }

  if (Sujet.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer le sujet de son message.
    e.preventDefault();
    FalseSujet.textContent = "Veuillez insérer un sujet à votre message.";
    FalseSujet.style.color = "red";
    Sujet.style.border = "2px solid red";
  } else if (myRegexSujet.test(Sujet.value) == false) {
    e.preventDefault();
    FalseSujet.textContent =
      "Veuillez rentrer au moins cinq caractères valides (lettres, avec ou sans accent)";
    FalseSujet.style.color = "red";
    Sujet.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseSujet.textContent = "";
    Sujet.style.border = "1px solid black";
  }

  if (Message.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son message.
    e.preventDefault();
    FalseMessage.textContent = "Veuillez insérer votre message ici.";
    FalseMessage.style.color = "red";
    Message.style.border = "2px solid red";
  } else if (myRegexMessage.test(Message.value) == false) {
    e.preventDefault();
    FalseMessage.textContent =
      "Veuillez rentrer au moins cinq caractères valides (lettres, chiffres ou caracteres speciaux comme .?!,@$#-_ sont autorisés).";
    FalseMessage.style.color = "red";
    Message.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseMessage.textContent = "";
    Message.style.border = "1px solid black";
  }
}
