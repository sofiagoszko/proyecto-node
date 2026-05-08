const method = process.argv[2].toLowerCase();
const endpoint = process.argv[3];

// Funciones GET/POST/DELETE

async function getAllProducts() {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching products:", error);
    }
}

async function getProductById(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching product:", error);
    }
}

async function createProduct(product) {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error creating product:", error);
    }
}

async function deleteProductById(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error deleting product:", error);
    }
}


// Switch para determinar qué función ejecutar según el método y endpoint

switch (method) {
    case "get": {
        if (endpoint === "products") {
            console.log("Getting all products");
            getAllProducts();
        } else if (endpoint.startsWith("products/")) {
            const id = endpoint.split("/")[1];
            console.log(`Getting product with id: ${id}`);
            getProductById(id);
        }else{
            console.log("Invalid endpoint for GET method");
        }
        break;
    }
    case "post": {
        console.log("Creating new product");
        const [,,,,title, price, category] = process.argv;
        const product = { title, price, category };
        createProduct(product);
        break;
    }
    case "delete": {
        if(endpoint.startsWith("products/")){
            const id = endpoint.split("/")[1];
            console.log(`Deleting product with id: ${id}`);
            deleteProductById(id);
        }else{
            console.log("Invalid endpoint for DELETE method");
        }
        break;
    }
    default:{
        console.log("Invalid method");
    }
}
