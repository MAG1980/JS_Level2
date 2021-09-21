class Hamburger {
    static big = {
        name: "big",
        price: 100,
        calorificValue: 40
    };
    static small = {
        name: "small",
        price: 50,
        calorificValue: 20
    };
    static cheese = {
        name: "cheese",
        price: 10,
        calorificValue: 20
    };
    static salad = {
        name: "salad",
        price: 20,
        calorificValue: 5
    };
    static potato = {
        name: "potato",
        price: 15,
        calorificValue: 10
    };
    static condiment = {
        name: "condiment",
        price: 15,
        calorificValue: 0
    };
    static mayonnaise = {
        name: "mayonnaise",
        price: 20,
        calorificValue: 5
    };

    constructor(size, stuffing, flavor = []) {
        this.size = size,
            this.stuffing = stuffing,
            this.flavor = flavor,
        this.$total = document.getElementById("product-total")
    }

    addTopping(topping) {
    } // Добавить добавку }
    removeTopping(topping) {
    } // Убрать добавку }
    getToppings(topping) {
    } // Получить список добавок }

    getIgredients() {
        return  this.flavor.concat(this.size, this.stuffing);
    }

    setSize(size) {
        if (size === "big") this.size = Hamburger.big;
        if (size === "small") this.size = Hamburger.small;
        this.renderRadio("product-size-choice", this.size);
    }

    getSize() {
        console.log(this.size.name);
        return this.size;
    } // Узнать размер гамбургера }
    setStuffing(stuff) {
        switch (stuff) {
            case "cheese":
                this.stuffing = Hamburger.cheese;
                break;
            case "salad":
                this.stuffing = Hamburger.salad;
                break;
            case "potato":
                this.stuffing = Hamburger.potato;
                break;
        }
        this.renderRadio("product-stuff-choice", this.stuffing);
    }

    getStuffing() {
        console.log(this.stuffing.name);
        return this.stuffing;
    } // Узнать начинку гамбургера }
    addFlavor(flavor) {
        if (flavor === "condiment") {
            this.flavor.push(Hamburger.condiment);
        }
        if (flavor === "mayonnaise") {
            this.flavor.push(Hamburger.mayonnaise);
        }
        this.renderCheckbox(this.flavor);
    }

    removeFlavor(flavor) {
        let obj = null;
        switch (flavor) {
            case "condiment":
                obj = Hamburger.condiment;
                break;
            case "mayonnaise":
                obj = Hamburger.mayonnaise;
                break;
        }
        let index = this.flavor.indexOf(obj);
        console.log(index);
        this.flavor.splice(index, 1);
        this.renderCheckbox(this.flavor);
    }

    calculatePrice() {
        let arr = this.getIgredients();
        console.log(arr);
        return arr
            .map((elem) => elem.price)
            .reduce((sum, current) => sum + current);
    } // Узнать цену }
    calculateCalories() {
        let arr = this.getIgredients();
        console.log(arr);
        return arr
            .map((elem) => elem.calorificValue)
            .reduce((sum, current) => sum + current);
    } // Узнать калорийность }
    renderRadio(id, obj) {
        this.$total.innerHTML="";
        let $block = document.getElementById(id);
        $block.innerHTML = `
                    <div class="info">
                        <div class="info-inner">
                          <p>Калорийность:</p>
                          <p>${obj.calorificValue} калорий</p>
                          </div><div class="info-inner">
                          <p>Стоимость:</p>
                          <p>${obj.price} рублей</p>
                          </div>
                          </div>`;
    }

    renderCheckbox(arr) {
        this.$total.innerHTML="";
        let $Condiment = document.getElementById("product-flavor-Condiment");
        let $Mayonnaise = document.getElementById("product-flavor-Mayonnaise");
        if (arr.find(element => element.name === "condiment")) {
            $Condiment.innerHTML =
                `<div class="info">
                          <div class="info-inner">
                           <p>Калорийность:</p>
                          <p>${Hamburger.condiment.calorificValue} калорий</p>
                          </div>
                          <div class="info-inner">
                          <p>Стоимость:</p>
                          <p>${Hamburger.condiment.price} рублей</p>
                          </div>
                          </div>`;
        } else {
            $Condiment.innerHTML = '';
        }

        if (arr.find(element => element.name === 'mayonnaise')) {
            $Mayonnaise.innerHTML =
                `<div class="info">
                        <div class="info-inner">
                              <p>Калорийность:</p>
                              <p>${Hamburger.mayonnaise.calorificValue} калорий</p>
                              </div>
                              <div class="info-inner">
                              <p>Стоимость:</p>
                              <p>${Hamburger.mayonnaise.price} рублей</p>
                          </div>
                      </div>`;
        } else {
            $Mayonnaise.innerHTML = '';
        }
    }
    renderTotal(price, calories){
        this.$total.innerHTML="";
        this.$total.insertAdjacentHTML('afterbegin',
            `<div class="info">
                          <div class="info-inner">
                           <p>Калорийность:</p>
                          <p>${calories} калорий</p>
                          </div>
                          <div class="info-inner">
                          <p>Стоимость:</p>
                          <p>${price} рублей</p>
                          </div>
                          </div>`);

    }

}

let hamburger = new Hamburger();

document.querySelectorAll('input[name="size"]').forEach(function (elem) {
    elem.addEventListener("change", function () {
        console.log(this.value);
        hamburger.setSize(this.value);
    });
});
document.querySelectorAll('input[name="stuff"]').forEach(function (elem) {
    elem.addEventListener("change", function () {
        console.log(this.value);
        hamburger.setStuffing(this.value);
    });
});
document.querySelectorAll('input[name="flavor"]').forEach(function (elem) {
    elem.addEventListener("change", function () {
        if (this.checked === true) {
            console.log(this.value);
            hamburger.addFlavor(this.value);
        } else {
            hamburger.removeFlavor(this.value);
        }
    });
});
document.getElementById('product-button').addEventListener('click', () => {
    hamburger.renderTotal(hamburger.calculatePrice(), hamburger.calculateCalories());
})
