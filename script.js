console.log("script running");

//variable to save the shopping list total (in cents)
let  totalInCent = 0;
let appletimes = 0;

//creating a variable, (appleButton, bananaButton, mangoButton, and shoppiingList) setting it equal to the id = apple,
// id = banana, id = mango, id = shoppingList
// Part1, who
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const watermelonButton = document.querySelector("#Watermelon");
const cherryButton = document.querySelector("#Cherry");
const shoppingList = document.querySelector("#shopping-cart");

console.log(appleButton);

//Part2, what
const addApple = () => {
  shoppingList.innerHTML = `<p>Apple</p>`
  appletimes += 1
  totalInCent += 75;
  uppdateTotal();
};

const addBanana = () => {
  shoppingList.innerHTML = `<p>Banana</p>`
  totalInCent += 30;
  uppdateTotal();
};

const addMango = () => {
  shoppingList.innerHTML = `<p>Mango</p>`
  totalInCent += 125;
  updateTotal();
};

const addWatermelon = () => {
  shoppingList.innerHTML = `<p>Watermelon</p>`
  totalInCent += 150;
  updateTotal();
}

const addCherry = () => {
  shoppingList.innerHTML = `<p>Cherry</p>`
  totalInCent += 100;
  updateTotal();
}
//Part3, when/why
appleButton.addEventListener("click", addApple);
bananaButton.addEventListener("click", addBanana);
mangoButton.addEventListener("click", addMango);
watermelonButton.addEventListener("click", addWatermelon);
cherryButton.addEventListener("click", addCherry);

//s1
const total = document.querySelector("#total-span");
//s2
const updateTotal = () => {
  total.innerHTML = totalInCent/100;
}
//s3
//when should the total update?
