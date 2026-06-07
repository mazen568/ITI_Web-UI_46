import express from 'express';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid'; 

const app = express();

//for specific endpoint
// app.use("/test",(req,res,next)=>{
//     console.log("middleware");
//     next();//goes to next endpoint
//    })


app.use((req,res,next)=>{
 console.log("middleware");
 next();//goes to next endpoint
})

app.use(express.json());


const readProducts= async()=>{
    const data= await fs.readFile("./products.json","utf-8");
    return JSON.parse(data);
}

const writeProducts = async (products) => {
    await fs.writeFile("./products.json", JSON.stringify(products, null, 2));
};

const createProduct = (name, price) => ({
    id: uuidv4(),
    name,
    price
});


app.get("/products",async(req,res)=>{
    try {
        const products= await readProducts();
        res.status(200).json({ success: true, data: products });        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

app.get("/products/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const products= await readProducts();
        const product=products.find(p=>p.id==id);
        if(!product){
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})


app.post("/products",async(req,res)=>{
    try {
        const {name,price}=req.body;
        if(!name || !price){
            return res.status(400).json({ success: false, message: "Name and price are required" });
        }
        const product=createProduct(name,price);
        const products= await readProducts();
        products.push(product);
        await writeProducts(products);
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

app.put("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        if (!name && !price) {
            return res.status(400).json({success: false,message: "At least one of name or price is required to update" });
        }

        const products = await readProducts();

        const product = products.find(p => p.id == id);
        if (!product) {
            return res.status(404).json({success: false,message: "Product not found"});
        }

        product.name = name;
        product.price = price;

        await writeProducts(products);

        res.status(200).json({ success: true, data: product });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await readProducts();
        
        const productToDelete = products.find(p => p.id == id);

        if (!productToDelete) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        const filteredProducts = products.filter(p => p.id != id);

        await writeProducts(filteredProducts);
        res.status(200).json({ success: true, data: productToDelete });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(5000, () => {
    console.log("server is running");
})