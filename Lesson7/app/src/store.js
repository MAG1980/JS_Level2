import {createStore} from "vuex"

export default createStore({
        state() {
            return {
                API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
                catalogUrl: '/catalogData.json',
                cartUrl: '/getBasket.json',
                counter: 1,
                products: [],
                filtered: [],
                cartItems: [],
            }
        },
        mutations: {
            loadProducts(state, arr) {
                state.products = arr;
                state.filtered = arr;
            },
            loadCart(state, arr) {
                state.cartItems = arr;
            },
            filter(state, userSearch) {
                let regexp = new RegExp(userSearch, 'i');
                state.filtered = state.products.filter(el => regexp.test(el.product_name));
            },
            addProduct(state, arr) {
                document.querySelector('.header__cart').open = true
                let [data, item] = arr
                if (data.result === 1) {
                    let find = this.state.cartItems.find(el => el.id_product === item.id_product);
                    if (find) {
                        find.quantity++;
                    } else {
                        const prod = Object.assign({quantity: 1}, item);
                        this.state.cartItems.push(prod)
                    }
                }
            },
            removeProduct(state, arr) {
                let [data, item] = arr
                if (data.result === 1) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        state.cartItems.splice(state.cartItems.indexOf(item), 1);
                    }
                    if (state.cartItems.length === 0) {
                        document.querySelector('.header__cart').open = false
                    }
                }
            },
            showCart(state) {
                state.cartShown = 'true'
                // state.cartShown = !state.cartShown
            },


        },
        actions: {
            getJson(context, url) {
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => console.log(error))
            }
            ,
            fetchProducts(context) {
                this.dispatch('getJson', this.getters.fullCatalogUrl)
                    .then(data => {
                        let arr = [];
                        for (let item of data) {
                            arr.push(item);
                        }
                        return arr
                    }).then(arr => context.commit('loadProducts', arr))
            }
            ,
            fetchCart(context, arrProducts) {
                arrProducts.then(arr => context.commit('loadCart', arr))
            }
            ,
            clickOnAdd(context, item) {
                // context.commit('showCart')
                this.dispatch('getJson', `${this.state.API}/addToBasket.json`)
                    .then(data => {
                        context.commit('addProduct', [data, item])
                    })
            }
            ,
            clickOnRemove(context, item) {
                this.dispatch('getJson', `${this.state.API}/addToBasket.json`)
                    .then(data => {
                        context.commit('removeProduct', [data, item])
                    })
            }
            ,
            clickOnCard(context) {
                context.commit('showCart')
            }
            ,

        },
        getters: {
            fullCatalogUrl: state => state.API + state.catalogUrl,
            fullCartUrl: state => state.API + state.cartUrl,
            productsFiltered: state => state.filtered,
            productsCart: state => state.cartItems,
        },
    }
)