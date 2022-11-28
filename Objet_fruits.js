class Fruit {

    constructor (name, image) {
        this.name = name;
        this.image = image;
        this.html = document.createElement("div");
        this.classButton = "boutonFruits"
        this.html.addEventListener('mouseover', (event) => {
           
            imageTochange.style.backgroundImage = `url(${this.image})`;
        }) 
    
        this.html.addEventListener('mouseout', (event) => {
            
            imageTochange.style.backgroundImage = `url(${fruitClicker})`;
        }); 
    }

    get getHtml() {
        this.html.classList.add(this.classButton);
        this.html.textContent = this.name;
        this.html.setAttribute("id", this.name);
        this.html.style.height = 100 / fruits.length + "vh";
        return this.html
    }


    
};