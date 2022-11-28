let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];
let fruitClicker = "all-fruits.jpg";

const fruitsHtml = document.querySelector("#fruits");
const imageTochange = document.querySelector('#imageFruit');

fruits.forEach(fruit => {

    const unFruit = new Fruit(fruit.name, fruit.image);

    fruitsHtml.append(unFruit.getHtml);

    const clickFruit = document.getElementById(fruit.name);
    
    clickFruit.addEventListener("click", event => {
        let click = document.querySelectorAll(".boutonFruits");
        click.forEach(click =>{
            click.style.backgroundColor = "";
            
        })
        imageTochange.style.backgroundImage = `url(${fruit.image})`;
        unFruit.getHtml.style.backgroundColor = "red";
        fruitClicker = fruit.image;

    })
});