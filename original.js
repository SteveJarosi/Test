let menu = {
_courses: {
appetizers: [],
mains: [],
desserts: [],
},
get appetizers() {
return this._courses.appetizers
},
set appetizers(appetizer) {
this._courses.appetizers = appetizer
},
get mains() {
return this._courses.mains
},
set mains(mains) {
this._courses.main = mains
},
get desserts() {
return this._courses.desserts
},
set desserts(desserts) {
this._courses.desserts = desserts
},
get courses() {
return {
appetizers: this.appetizers,
mains: this.mains,
desserts: this.desserts
    };
  },
addDishToCourse (courseName, dishName, dishPrice){
const dish = {
type: courseName,
name: dishName,
price: dishPrice,
};
this._courses[courseName].push(dish)
},
getRandomDishFromCourse(courseName) {
const dishes = this._courses[courseName]
const randomIndex = Math.floor(math.random() * dishes.length)
return dishes[randomIndex]
  },
generateRandomMeal(){
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('main');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price ;
return hi and this is me robo1000 your meal is ${appetizer.name}, ${main.name}, ${dessert.name} your total price is ${totalPrice} dollars. do you accept the meal?
}
};

menu.addDishToCourse('appetizers','salad and homus',5.00)
menu.addDishToCourse('appetizers','fries',7.00)
menu.addDishToCourse('appetizers','chicken or meat shawerma',10.00)

menu.addDishToCourse('menu','chicken shawerma meal',78.50)
menu.addDishToCourse('menu','meat shawerma meal',76.00)
menu.addDishToCourse('menu','pizza (anykind)',80.00)

menu.addDishToCourse('desserts','molten cake(topped with icecream)',30.00)
menu.addDishToCourse('desserts','icecream(choclate or vanila)',5.00)
menu.addDishToCourse('desserts','milkshake(choclate,oreo,cocktail,mango,banana)',5.00)

const meal = menu.generateRandomMeal;
console.log(meal)