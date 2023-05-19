<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    $surname2 = htmlspecialchars($_POST["nom"]);
    $name2 = htmlspecialchars($_POST["prenom"]);
    $email2 = htmlspecialchars($_POST["email"]);
    $emailconf2 = htmlspecialchars($_POST["confemail2"]);
    $password2 = htmlspecialchars($_POST["pwd"]);
    $confpassword2 = htmlspecialchars($_POST["confpwd"]);
    $adresse2 = htmlspecialchars($_POST["adresse"]);
    $country = htmlspecialchars($_POST["pays"]);
    $CodePostal2 = htmlspecialchars($_POST["code_postal"]);
    $Ville2 = htmlspecialchars($_POST["ville"]);
    $numero2 = htmlspecialchars($_POST["numero"]);

    $regexName2 = "/^[a-zA-ZÀ-ÿ-\s]{2,30}$/";
    $regexEmail2 = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";
    $regexPassword = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/";
    $regexCodePostal = "/^[0-9]{4,7}$/";
    $regexVille = "/^[a-zA-ZÀ-ÿ-\s]{2,30}$/";
    $regexNumero = "/^[0-9]{7,}$/";
    $regexAddress = "/^[a-zA-ZÀ-ÿ0-9\s,.'-]{3,}$/";


    //On verifie ici coté serveur si les données fournies sont correctes
    if (empty($surname2)) {
        $errors[] = "Veuillez renseigner votre nom.";
    } else if (!preg_match($regexName2, $surname2)) {
        $errors[] = "Veuillez renseigner un nom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($name2)) {
        $errors[] = "Veuillez renseigner votre prénom.";
    } else if (!preg_match($regexName2, $name2)) {
        $errors[] = "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($email2)) {
        $errors[] = "Veuillez renseigner votre adresse mail.";
    } else if (!preg_match($regexEmail2, $email2)) {
        $errors[] = "Veuillez rentrer une adresse mail existante, sous forme exemple@domaine.fr.";
    }
    if (empty($confemail2)) {
        $errors[] = "Veuillez renseigner votre adresse mail.";
    } else if (!preg_match($regexEmail2, $confemail2)) {
        $errors[] = "Veuillez rentrer une adresse mail existante, sous forme exemple@domaine.fr.";
    }

    if (empty($password2)) {
        $errors[] = "Veuillez renseigner votre sujet.";
    } else if (!preg_match($regexPassword, $password2)) {
        $errors[] = "Veuillez renseigner un sujet valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($confpwd)) {
        $errors[] = "Veuillez renseigner votre sujet.";
    } else if (!preg_match($regexPassword, $confpwd)) {
        $errors[] = "Veuillez renseigner un sujet valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($adresse2)) {
        $errors[] = "Veuillez renseigner votre adresse.";
    } else if (!preg_match($regexAddress, $adresse2)) {
        $errors[] = "Veuillez renseigner une adresse valide (seuls les lettres, espaces et tirets sont autorisés).";
    }
    if (empty($CodePostal2)) {
        $errors[] = "Veuillez renseigner votre code postal.";
    } else if (!preg_match($regexCodePostal, $CodePostal2)) {
        $errors[] = "Veuillez renseigner un code postal valide .";
    }
    if (empty($Ville2)) {
        $errors[] = "Veuillez renseigner votre prénom.";
    } else if (!preg_match($regexVille, $Ville2)) {
        $errors[] = "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($numero2)) {
        $errors[] = "Veuillez renseigner votre prénom.";
    } else if (!preg_match($regexNumero, $numero2)) {
        $errors[] = "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }
    //Si les données sont correctes, le mail est envoyé au webmaster, l'adresse mail du site. 
    if (empty($errors)) {
        header("Location: formulaire.php?success=true");
    }
}
;