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
            }
        },
        mutations: {
            fetchProducts(state, arr) {
                console.log(arr);
                state.products = arr;
                state.filtered = arr;
            },
            filter(state, userSearch) {
                let regexp = new RegExp(userSearch, 'i');
                state.filtered = state.products.filter(el => regexp.test(el.product_name));
            }
            ,
        },
        actions: {
            getJson(context, url) {
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => console.log(error))
                    .then(data => {
                            let arr = [];
                            for (let item of data) {
                                arr.push(item);
                            }
                            return arr
                        }
                    ).then(arr => context.commit('fetchProducts', arr))
            }
        },
        getters: {
            fullCatalogUrl: state => state.API + state.catalogUrl,
            productsFiltered: state => state.filtered,
        }
    }
)