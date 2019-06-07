<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="author" content="Loxiuras">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./assets/stylesheets/fonts/montserrat.css">
    <link rel="stylesheet" type="text/css" href="./assets/stylesheets/minified/style.css">
    <script defer src="https://pro.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-RLPiEwcAdrH2NjFcwJipJtlFoIN1xvqPYeeDX5yYtSNu+HTIkQCDvPQ9thsUnPUS" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body id="body">

<?php
$_SESSION['items']['A'] = "A";
$_SESSION['items']['B'] = "B";
?>

<div id="site">
    <?php require_once "mvc/modules/header.php"; ?>

    <?php require_once "mvc/modules/shop-items-section.php"; ?>

    <?php require_once "mvc/modules/product-banner.php"; ?>
</div>

<script src="/assets/javascripts/modal.js"></script>
</body>
</html>