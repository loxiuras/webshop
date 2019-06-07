<div class="shop-items-index" id="productsIndex">
    <div class="inner">

        <div class="products-wrap">

            <div class="product" v-for="product in products" :style="{'background-image': 'url(' + product.imageUrl + ')'}">

                <div class="title-wrap">{{ product.name }}</div>

                <div class="price-wrap">
                    <p class="price">{{ product.price }}</p>
                </div>

            </div>

        </div>

    </div>
</div>

<script src="/assets/javascripts/vue/shop-items-section.js"></script>