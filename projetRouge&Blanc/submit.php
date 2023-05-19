<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    $surname = htmlspecialchars($_POST["surname"]);
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $job = htmlspecialchars($_POST["metier"]);
    $country = htmlspecialchars($_POST["country"]);
    $sujet = htmlspecialchars($_POST["sujetmsg"]);
    $message = htmlspecialchars($_POST["message"]);
    $regexName = "/^[a-zA-Z-\s]{2,50}$/";
    $regexEmail = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";
    $regexSujet = "/^[a-zA-Z-\s]{5,}$/";
    $regexMessage = "/^[a-zA-Z0-9-\s.'?!,@$#\-_]{5,}$/";

    //On verifie ici coté serveur si les données fournies sont correctes
    if (empty($surname)) {
        $errors[] = "Veuillez renseigner votre nom.";
    } else if (!preg_match($regexName, $surname)) {
        $errors[] = "Veuillez renseigner un nom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($name)) {
        $errors[] = "Veuillez renseigner votre prénom.";
    } else if (!preg_match($regexName, $name)) {
        $errors[] = "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    if (empty($email)) {
        $errors[] = "Veuillez renseigner votre adresse mail.";
    } else if (!preg_match($regexEmail, $email)) {
        $errors[] = "Veuillez rentrer une adresse mail existante, sous forme exemple@domaine.fr.";
    }

    if (empty($sujet)) {
        $errors[] = "Veuillez renseigner votre sujet.";
    } else if (!preg_match($regexSujet, $sujet)) {
        $errors[] = "Veuillez renseigner un sujet valide (seuls les lettres, espaces et tirets sont autorisés).";
    }
    if (empty($message)) {
        $errors[] = "Veuillez renseigner votre prénom.";
    } else if (!preg_match($regexMessage, $message)) {
        $errors[] = "Veuillez renseigner un prénom valide (seuls les lettres, espaces et tirets sont autorisés).";
    }

    //Si les données sont correctes, le mail est envoyé au webmaster, l'adresse mail du site. 
    if (empty($errors)) {
        //Si on souhaite envoyé un mail, enlever le commentaire et le connecter au serveur
        /*
        // Construction du message à envoyer
        $to = "R&B@gmail.com@gmail.com";
        $subject = "Demande de contact: $sujet";
        $message_body = "Nom : $surname\nPrénom : $name\nEmail : $email\nMétier : $job\nPays : $country\nSujet : $sujet\nMessage : $message";
        // Envoi de l'e-mail
        $headers = "From: $email\r\nReply-To: $email";
        if (mail($to, $subject, $message_body, $headers)) {
        echo "<p style='color:green;'>Le formulaire est envoyé !</p>";
        } else {
        echo "<p style='color:red;'>Une erreur s'est produite. Le message n'a pas pu être envoyé.</p>";
        }*/
        header("Location: formulairecontact.php?success=true");
        $_SESSION['form_submitted'] = true;
        exit();
    }
}