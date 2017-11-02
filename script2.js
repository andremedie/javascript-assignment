/* GLOBAL VARIABLES */
var listOfProducts;
var numberOfProducts = 0;
var cartCount = document.getElementById("cart");
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("products.json")
.then(function(response){
    return response.json();
} )
.then(function(data) {
    productData = data;
    createListFromProductData();
    console.log(productData);

});
    function createListFromProductData() {
        var main = document.getElementById("main");
        main.className = "mainClass";

            for(var index = 0; index < productData.length; index++) {
        
            var productCard = createProductCard(productData[index]);
        main.appendChild(productCard);
    }
    document.body.appendChild(main);
}


function createProductCard (productData) {
    var productCard = document.createElement("div")
    productCard.className = "productCardClass";

    var getProductTitle = document.createElement("h2");
    getProductTitle.innerText = productData.title;
    productCard.appendChild(getProductTitle);

    var getProductDescription = document.createElement("p");
    getProductDescription.innerText = productData.description;
    productCard.appendChild(getProductDescription);

    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + productData.image;
    productCard.appendChild(getProductImage);

    var getProductPrice = document.createElement("h3")
    getProductPrice.innerText = productData.price + " kr";
    productCard.appendChild(getProductPrice);

    var buttonElement = document.createElement("button");
    buttonElement.innerText = "Lägg till i din kundvagn";
    



    buttonElement.onclick = function() {
        numberOfProducts ++
        
        cartCount.innerText = numberOfProducts;

    }
   
        productCard.appendChild(buttonElement);

    return productCard;

    
    
}





/** Uses the loaded products data to create a visible product list on the website */

    /* Check your console to see that the products are stored in the listOfProducts varible */
    

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */



/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */