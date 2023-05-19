<?php
session_start();

if (!isset($_SESSION['panier'])) {
  $_SESSION['panier'] = [];
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $produit = [
    'nom' => $_POST['nom'],
    'ref' => $_POST['ref'],
    'prix' => $_POST['prix'],
    'nbclick' => $_POST['nbclick']
  ];

  array_push($_SESSION['panier'], $produit);
  echo "Produit ajouté au panier.";
} else {
  echo "Erreur : méthode de requête non prise en charge.";
}
?>
