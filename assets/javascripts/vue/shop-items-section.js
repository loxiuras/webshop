let productsIndex = new Vue({
    el: '#productsIndex',
    data: {
        products: [
            {
                name: '200 gems',
                imageUrl: '/assets/images/products/sets/200GEMS.png',
                imageAlt: '200GEMS',
                package: 'Gems',
                value: '200',
                price: '4.99',
                currency: 'euro',
                description: '',
                sale: 0
            },
            {
                name: '800 gems',
                imageUrl: '/assets/images/products/sets/800GEMS.jpg',
                imageAlt: '800GEMS',
                package: 'Gems',
                value: '800',
                price: '9.99',
                currency: 'euro',
                description: '',
                sale: 0
            },
            {
                name: '1500 gems',
                imageUrl: '/assets/images/products/sets/1500GEMS.jpg',
                imageAlt: '1500GEMS',
                package: 'Gems',
                value: '1500',
                price: '14.99',
                currency: 'euro',
                description: '',
                sale: 0
            },
            {
                name: '8000 gems',
                imageUrl: '/assets/images/products/sets/8000GEMS.jpg',
                imageAlt: '8000GEMS',
                package: 'Gems',
                value: '800',
                price: '24.99',
                currency: 'euro',
                description: '',
                sale: 1
            }
        ]
    }
})