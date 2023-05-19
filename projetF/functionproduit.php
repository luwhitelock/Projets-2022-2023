<?php
$pdts = $current_category_info['produits'];
function pdtfunction($pdts)
{
    foreach ($pdts as $index => $pdt) {
        ?>
        <div class="produit">
            <p class="stock_container">stock : <span class="stock" value="<?php echo $pdt['stock']; ?>"><?php echo $pdt['stock']; ?></span></p>
            <li>
                <img src="<?php echo $pdt['image']; ?>" alt="<?php echo $pdt['nom']; ?>"
                    class="imgbase imgbase<?php echo ($index + 1); ?>">
                <div class="modale">
                    <div class="croix croix<?php echo ($index + 1); ?>">
                        <span class="line4 linecroix"></span>
                        <span class="line5 linecroix"></span>
                    </div>
                    <img src="<?php echo $pdt['image']; ?>" class="imagemodale">
                </div>
            </li>
            <p class="description">
                <?php echo $pdt['nom']; ?><br> ref:
                <?php echo $pdt['ref']; ?>
            </p>
            <p class="prix">
                <?php echo $pdt['prix']; ?>
            </p>
            <div class="panier_produit">
                <div class="compteur">
                    <button type="button" class="retirer">-</button>
                    <p>panier : <span class="nbclick">0</span></p>
                    <button type="button" class="ajouter">+</button>
                </div>
                <button class="ajouter_au_panier">Ajouter au panier</button>
            </div>
        </div>
        <?php

    }
}
pdtfunction($pdts);
?>

<script>
    // Ajoutez votre code JavaScript ici pour gérer les événements de clic, mettre à jour les compteurs, et envoyer les données à un script PHP pour les afficher sur une autre page.

    const ajouterButtons = document.querySelectorAll('.ajouter-produit');
    const retirerButtons = document.querySelectorAll('.retirer-produit');
    const nbClicks = document.querySelectorAll('.nbclick-produit');

    ajouterButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            nbClicks[index].innerText = parseInt(nbClicks[index].innerText) + 1;
            const productName = "Produit " + (index + 1);
            const productCount = nbClicks[index].innerText;
            sendData(productName, productCount);
        });
    });
    retirerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentCount = parseInt(nbClicks[index].innerText);
            if (currentCount > 0) {
                nbClicks[index].innerText = currentCount - 1;
                const productName = "Produit " + (index + 1);
                const productCount = nbClicks[index].innerText;
                sendData(productName, productCount);
            }
        });
    });

    function sendData(name, count) {
        const url = "panier.php";
        const data = new FormData();
        data.append("name", name);
        data.append("count", count);

        fetch(url, {
            method: "POST",
            body: data
        }).then(response => response.text())
            .then(data => {
                console.log(data);
            }).catch(error => {
                console.error(error);
            });
    }
</script>