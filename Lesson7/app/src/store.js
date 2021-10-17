import {createStore} from "vuex"

export default createStore({
    state() {
        return {
            API: '',
            catalogUrl: 'db/products.json',
            cartUrl: 'cart/db/userCart.json',
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
        removeProduct(state, item) {
            state.cartItems.splice(state.cartItems.indexOf(item), 1);
            if (state.cartItems.length === 0) {
                document.querySelector('.header__cart').open = false
            }
        }
    },
    actions: {
        getJson(context, url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(context, arr) {
            let [url, data] = arr
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(context, arr) {
            console.log(arr)
            let [url, data] = arr
            console.log(url)
            console.log(data)
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        fetchProducts(context, url) {
            this.dispatch('getJson', url)
                .then(data => {
                    let arr = [];
                    for (let item of data) {
                        arr.push(item);
                    }
                    return arr
                }).then(arr => context.commit('loadProducts', arr))
        }
        ,
        fetchCart(context, url) {
            this.dispatch('getJson', url)
                .then(data => {
                    let arr = [];
                    for (let item of data.contents) {
                        arr.push(item);
                    }
                    return arr
                }).then(arr => context.commit('loadCart', arr))
        },
        clickOnAdd(context, item) {
            console.log(item)
            let find = this.state.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.dispatch('putJson', [`/api/cart/${find.id_product}`, {quantity: 1}])
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.dispatch('postJson', [`/api/cart`, prod])
                    .then(data => {
                        if (data.result === 1) {
                            this.state.cartItems.push(prod)
                        }
                    })
            }
        },
        clickOnRemove(context, item) {
            let find = this.state.cartItems.find(el => el.id_product === item.id_product);
            this.dispatch('putJson', [`/api/cart/remove/${find.id_product}`, item])
                .then(data => {
                    context.commit('removeProduct', item)
                })
        }
        ,
        clickOnCard(context) {
            context.commit('showCart')
        }
        ,

    },
    getters
:
{
    fullCatalogUrl: state => state.API + state.catalogUrl,
        fullCartUrl
:
    state => state.API + state.cartUrl,
        productsFiltered
:
    state => state.filtered,
        productsCart
:
    state => state.cartItems,
}
,
}
)