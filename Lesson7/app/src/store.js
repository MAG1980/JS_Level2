import {createStore} from "vuex"

export default createStore({
    state() {
        return {
            counter: 1,
            products: [],
            filtered: [],
        }
    },
    mutations: {
        filter(state, userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            state.filtered = state.products.filter(el => regexp.test(el.product_name));
        }
    }
})