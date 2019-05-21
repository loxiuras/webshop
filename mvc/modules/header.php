<?php require_once "mvc/modules/Shoppingcart.php"; ?>

<div class="background-wrap">
<div class="header">

    <div class="inner">

        <div class="logo-wrap">
            <a href="index.php" class="logo">
                <i class="fas fa-dice-d8"></i>GamePanel
            </a>
        </div>

        <nav class="nav">
            <div class="nav__item login">
                <a href="" class="nav__item-link">
                    <div class="icon"><i class="fas fa-user"></i></div>
                    <div class="text">Login</div>
                </a>
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

<div class="slider">

    <div class="inner">
        <div class="slider__content-wrap">
            <div class="slider__label">Complete remaster</div>
            <h3 class="slider__title">Nox</h3>
            <h5 class="slider__title-sub">Goddess of Night</h5>
            <p class="slider__paragraph">So fragile is the line between sleep and death, the difference only waking with the dawn. In that darkness she reigns, as the sun sinks below the horizon, as stalkers hunt their prey, as shadows thicken to consume the light. She is primal in a way that even the mightiest of Gods must fear, for she is the Goddess of Night, Nox, and from her was born all the certainties of life.</p>
            <a href="#" class="slider__button button-transparent">Pre-order now</a>
        </div>
    </div>
    
    <div class="keyart">
        <img class="keyart__image" src="assets/images/arena.jpg" alt="KeyArt">
        <div class="keyart__text">New gamemode</div>
    </div>

</div>
</div>