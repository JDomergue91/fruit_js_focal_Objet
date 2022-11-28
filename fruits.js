let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];
let fruitClicker = "all-fruits.jpg";

const fruitsHtml = document.querySelector("#fruits");
const imageTochange = document.querySelector('#imageFruit');

fruits.forEach(fruit => {
    const div = document.createElement('div');
    div.classList.add("boutonFruits");
    div.textContent = fruit.name;
    div.style.height = 100 / fruits.length+"vh";
    div.setAttribute("id", fruit.name);
    
    fruitsHtml.appendChild(div);

    const clickFruit = document.getElementById(fruit.name);
    

    clickFruit.addEventListener("click", event => {
        let click = document.querySelectorAll(".boutonFruits");
        click.forEach(click =>{
            click.style.backgroundColor = "";
            
        })
        imageTochange.style.backgroundImage = `url(${fruit.image})`;
        div.style.backgroundColor = "red";
        fruitClicker = fruit.image;

    })

    div.addEventListener('mouseover', (event) => {
        imageTochange.style.backgroundImage = `url(${fruit.image})`;
    }) 

    div.addEventListener('mouseout', (event) => {
        imageTochange.style.backgroundImage = `url(${fruitClicker})`;
    }); 

    
    
}); 

