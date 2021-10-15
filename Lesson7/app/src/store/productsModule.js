export default {
    state: {
        productsArray: [],
        filteredArray: [],
    },
    mutations: {
        setProductsArray(state, payload) {
            state.productsArray = payload;
        }
    },
    getters: {},
    actions: {
        fetchData(context) {
            this.getJson(`https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'`)
                .then(data => {
                    let products = [];
                    let filtered = [];
                    for (let item of data) {
                        products.push(item);
                        filtered.push(item);
                    }
                    context.commit('setProductsArray', products)
                });
        }
    },
}