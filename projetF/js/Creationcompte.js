var formValidationCreate = document.getElementById("SendAccountData");
//Creation de variables permettant d'effectuer des verifications sur les données fournies dans le formulaire de création de compte.
var Login2 = document.getElementById("login");
var FalseLogin2 = document.getElementById("falselogin");

var Surname2 = document.getElementById("surname2");
var FalseSurname2 = document.getElementById("falsesurname2");
var Name2 = document.getElementById("name2");
var FalseName2 = document.getElementById("falsename2");
var myRegexName2 = /^[a-zA-ZÀ-ÿ-\s]{2,30}$/;

var Email2 = document.getElementById("email2");
var FalseEmail2 = document.getElementById("falsemail2");
var myRegexEmail2 =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var ConfEmail2 = document.getElementById("confemail2");
var FalseConfEmail2 = document.getElementById("falseconfmail2");

var MotDePasse = document.getElementById("password");
var FalseMotdePasse = document.getElementById("falsepassword");
var myRegexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
var ConfMdp = document.getElementById("confpwd");
var FalseConfMdp = document.getElementById("falseconfpwd");

var CodePostal = document.getElementById("codepostal");
var FalseCodePostal = document.getElementById("falsecodepostal");
var myRegexCodePostal = /^[0-9]{4,7}$/;

var Ville = document.getElementById("ville");
var FalseVille = document.getElementById("falseville");
var myRegexVille = /^[a-zA-ZÀ-ÿ-\s]{2,30}$/;

var Numero = document.getElementById("number");
var FalseNumero = document.getElementById("falsenumber");
var myRegexNumero = /^[0-9]{7,}$/;

var Address = document.getElementById("address");
var FalseAddress = document.getElementById("falseaddress");
var myRegexAddress = /^[a-zA-ZÀ-ÿ0-9\s,.'-]{3,}$/;

var Certification = document.getElementById("accept");
var FalseCertification = document.getElementById("falseaccept");

var EtreMajeur = document.getElementById("majeur");
var FalseMajeur = document.getElementById("falsemajeur");

formValidationCreate.addEventListener("click", validation1);

function validation1(e) {
  if (Login2.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son nom de famille.
    e.preventDefault();
    FalseLogin2.textContent = "Veuillez créer un identifiant.";
    FalseLogin2.style.color = "red";
    Login2.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseLogin2.textContent = "";
    Login2.style.border = "1px solid black";
  }

  if (Surname2.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son nom de famille.
    e.preventDefault();
    FalseSurname2.textContent = "Veuillez renseigner votre nom.";
    FalseSurname2.style.color = "red";
    Surname2.style.border = "2px solid red";
  } else if (myRegexName2.test(Surname2.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseSurname2.textContent =
      "Veuillez renseigner un nom valide (seuls les lettres, espaces et tirets sont autorisés).  ";
    FalseSurname2.style.color = "red";
    Surname2.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseSurname2.textContent = "";
    Surname2.style.border = "1px solid black";
  }

  if (Name2.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son prénom.
    e.preventDefault();
    FalseName2.textContent = "Veuillez renseigner votre prénom.";
    FalseName2.style.color = "red";
    Name2.style.border = "2px solid red";
  } else if (myRegexName2.test(Name2.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseName2.textContent =
      "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).  ";
    FalseName2.style.color = "red";
    Name2.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseName2.textContent = "";
    Name2.style.border = "1px solid black";
  }

  if (Email2.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son adresse mail.
    e.preventDefault();
    FalseEmail2.textContent = "Veuillez renseigner votre adresse mail.  ";
    FalseEmail2.style.color = "red";
    Email2.style.border = "2px solid red";
  } else if (myRegexEmail2.test(Email2.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseEmail2.textContent =
      "Veuillez rentrer une adresse mail existante, sous forme exemple@domaine.fr.  ";
    FalseEmail2.style.color = "red";
    Email2.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseEmail2.textContent = "";
    Email2.style.border = "1px solid black";
  }

  if (ConfEmail2.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer une seconde fois son adresse mail.
    e.preventDefault();
    FalseConfEmail2.textContent = "Veuillez confirmer votre adresse mail.";
    FalseConfEmail2.style.color = "red";
    ConfEmail2.style.border = "2px solid red";
  } else if (Email2.value != ConfEmail2.value) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseConfEmail2.textContent =
      "Les deux adresses mail renseignées ne correspondent pas.";
    FalseConfEmail2.style.color = "red";
    ConfEmail2.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseConfEmail2.textContent = "";
    ConfEmail2.style.border = "1px solid black";
  }

  if (MotDePasse.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer un mot de passe.
    e.preventDefault();
    FalseMotdePasse.textContent = "Veuillez renseigner un mot de passe.";
    FalseMotdePasse.style.color = "red";
    MotDePasse.style.border = "2px solid red";
  } else if (myRegexPassword.test(MotDePasse.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseMotdePasse.textContent =
      "Veuillez créer un mot de passe composé de plus de sept caractères, d au moins une lettre minuscule, majuscule, un nombre, et un caractère spécial (!@#$%^&*).";
    FalseMotdePasse.style.color = "red";
    MotDePasse.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseMotdePasse.textContent = "";
    MotDePasse.style.border = "1px solid black";
  }

  if (ConfMdp.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer une seconde fois son mot de passe.
    e.preventDefault();
    FalseConfMdp.textContent = "Veuillez confirmer votre mot de passe.";
    FalseConfMdp.style.color = "red";
    ConfMdp.style.border = "2px solid red";
  } else if (MotDePasse.value != ConfMdp.value) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseConfMdp.textContent =
      "Les deux mots de passe rentrés ne correspondent pas.";
    FalseConfMdp.style.color = "red";
    ConfMdp.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseConfMdp.textContent = "";
    ConfMdp.style.border = "1px solid black";
  }

  var DateDeNaissance = new Date(document.getElementById("date2").value);
  var FalseDate = document.getElementById("falsedate2");
  var minDate = new Date("1910, 02, 01");
  var maxDate = new Date("2005, 02, 01");

  if (DateDeNaissance == "Invalid Date") {
    //Verifie si l'utilisateur a rentré sa date de naissance.
    e.preventDefault();
    FalseDate.textContent = "Veuillez renseigner votre date de naissance.";
    FalseDate.style.color = "red";
  } else if (DateDeNaissance < minDate) {
    e.preventDefault();
    FalseDate.textContent =
      "Votre date de naissance doit etre supérieure au 01/02/1910 si vous souhaitez vous inscrire.";
    FalseDate.style.color = "red";
  } else if (DateDeNaissance > maxDate) {
    e.preventDefault();
    FalseDate.textContent =
      "Votre date de naissance doit etre inferieure au 01/02/2005 si vous souhaitez vous inscrire.";
    FalseDate.style.color = "red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseDate.textContent = "";
  }

  if (Address.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son adresse postale.
    e.preventDefault();
    FalseAddress.textContent =
      "Veuillez renseigner votre adresse postale (Nb Rue, et rue).";
    FalseAddress.style.color = "red";
    Address.style.border = "2px solid red";
  } else if (myRegexAddress.test(Address.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseAddress.textContent =
      "Veuillez renseigner une adresse postale valide composée des lettres, espaces, tirets et/ou chiffres.";
    FalseAddress.style.color = "red";
    Address.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseAddress.textContent = "";
    Address.style.border = "1px solid black";
  }

  if (CodePostal.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son code postal.
    e.preventDefault();
    FalseCodePostal.textContent = "Veuillez renseigner votre code postal.";
    FalseCodePostal.style.color = "red";
    CodePostal.style.border = "2px solid red";
  } else if (myRegexCodePostal.test(CodePostal.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseCodePostal.textContent =
      "Veuillez utiliser entre quatre et sept chiffres.";
    FalseCodePostal.style.color = "red";
    CodePostal.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseCodePostal.textContent = "";
    CodePostal.style.border = "1px solid black";
  }

  if (Ville.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer sa ville.
    e.preventDefault();
    FalseVille.textContent = "Veuillez renseigner le nom de votre ville.";
    FalseVille.style.color = "red";
    Ville.style.border = "2px solid red";
  } else if (myRegexVille.test(Ville.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseVille.textContent =
      "Veuillez renseigner un nom de ville composé de lettres, tirets et espaces si necessaire.";
    FalseVille.style.color = "red";
    Ville.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseVille.textContent = "";
    Ville.style.border = "1px solid black";
  }

  if (Numero.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son numéro de téléphone.
    e.preventDefault();
    FalseNumero.textContent = "Veuillez renseigner votre numéro de téléphone.";
    FalseNumero.style.color = "red";
    Numero.style.border = "2px solid red";
  } else if (myRegexNumero.test(Numero.value) == false) {
    //Si certains caractères rentrés ne sont pas autorisés, afficher un message indiquant les caractères autorisés.
    e.preventDefault();
    FalseNumero.textContent =
      "Veuillez renseigner un numéro de téléphone composé d'au moins 10 chiffres.";
    FalseNumero.style.color = "red";
    Numero.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseNumero.textContent = "";
    Numero.style.border = "1px solid black";
  }

  if (EtreMajeur.validity.valueMissing) {
    //Si le champ est vide, afficher un message indiquant à l'utilisateur de rentrer son numéro de téléphone.
    e.preventDefault();
    FalseMajeur.textContent = "Veuillez cocher cette case pour continuer.";
    FalseMajeur.style.color = "red";
    EtreMajeur.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseMajeur.textContent = "";
    EtreMajeur.style.border = "1px solid black";
  }

  if (Certification.validity.valueMissing) {
    //si la case n'est pas cochée, afficher un message d'indication.
    e.preventDefault();
    FalseCertification.textContent =
      "Veuillez cocher cette case pour continuer.";
    FalseCertification.style.color = "red";
    Certification.style.border = "2px solid red";
  } else {
    //Permet d'enlever le message d'erreur s'il n'y en a pas.
    FalseCertification.textContent = "";
    Certification.style.border = "1px solid black";
  }
}
