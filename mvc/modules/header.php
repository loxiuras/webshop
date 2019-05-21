<?php require_once "mvc/modules/Shoppingcart.php"; ?>

<div class="header">

    <div class="inner">

        <div class="logo-wrap">
            <a href="index.php" class="logo">
                <i class="fas fa-dice-d8"></i>GamePanel
            </a>
        </div>

        <nav class="nav">
            <div class="nav__item login">
                <a href="" class="nav__item-link">Login</a>
            </div>
            <div class="nav__item">
                <a href="" class="nav__item-link shoppingcart">
                    <i class="fal fa-shopping-cart"></i>
                    <?php
                        $Shoppingcart = new Shoppingcart();
                        echo $Shoppingcart->buildShoppingCartAmount();
                    ?>
                </a>
            </div>
        </nav>

    </div>

</div>