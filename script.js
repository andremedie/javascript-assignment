/* GLOBAL VARIABLES */
var listOfProducts = [
    {
        "title": "iPhone X",
        "description": "Latest and greatest smartphone from Apple.",
        "image": "iPhoneX.png",
        "price": 11495
    },{
        "title": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus",
        "image": "OnePlus5.png",
        "price": 4995
    },{
        "title": "Galaxy S8",
        "description": "Latest edge to edge smartphone from Samsung.",
        "image": "SamsungS8.png",
        "price": 7990
    },{
        "title": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "image": "LGV30.png",
        "price": 7495
    }
] 
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
/* fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products; */
    createUIFromLoadedProducts();

    
    
    

 

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);
    var header = document.querySelector("header");
    header.innerHTML = '<a href="index.html" id="menubar">TechStore</a><span></span><a href="kundvagn.html" id="menubar2"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>';
   
    var main = document.querySelector("#main");
    main.innerHTML = 
    console.log(main);

    var iPhoneX = document.createElement ("titel")
    iPhoneX.innertext = (listOfProducts[0].title)

    main.appendChild(iPhoneX)

    var iPhoneXinfo = document.createElement ("info")
    iPhoneXinfo.innerText = (listOfProducts[0].description)

    main.appendChild(iPhoneXinfo)

    var img = document.createElement("img")
    img.src = "assets/iPhoneX.png"

    main.appendChild(img)

    var iPhoneXpris = document.createElement("pris")
    iPhoneXpris.innerText = (listOfProducts[0].price) + "kr";

    main.appendChild(iPhoneXpris)

    var span = document.createElement("button");
    span.innerHTML = '<i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i><h6>Lägg i kundvagnen<h6>';
    var body = document.getElementsByTagName("#main")[0];
    main.appendChild(span);
    var count = 1;
    var span = document.querySelector("span");
    span.innerText = count;
    console.log(span)
            
    function add() {
        console.log("add");
        count = count + 1;
        span.innerText = count;
    }
        }

    
    ;
/*    
    var body = document.getElementsByTagName("#main")[0];
    main.appendChild(buttoniPhone);
    
    buttoniPhone.addEventListener ("click", function()  {
        
        //var buttoniPhone = document.querySelector("click");
        var buttoniPhonne = document.getElementById("click"),
        count = 0;
      buttoniPhone.onclick = function() {
        count += 1;
        buttoniPhone.innerHTML = "Click me: " + count;
      };
        } */
    



    // var ulElement = 
    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */



/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */