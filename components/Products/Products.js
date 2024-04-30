import {useState,useEffect} from "react";
import axios from "axios";
import "./Products.css";
// import {productsData} from "./productsData";
import Product from "./Product"


function Products()
{
    let[products,setProducts]=useState([]);
    useEffect(() => {
        getAllproducts();
    }, []);

    const getAllproducts=()=>
    {
   
    axios.get("https://fakestoreapi.com/products")
    .then((productsData)=>
    {
        setProducts(productsData.data);
    }).catch((errordata)=>
    {
        alert("Error while searching for products data");
    })
    };
    const getElectronics=()=>
    {
    
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((productsData)=>
    {
        setProducts(productsData.data);
    }).catch((errordata)=>
    {
        alert("Error while searching for electronics");
    })
    };
    const getWomenwear=()=>
    {
    
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((productsData)=>
    {
        setProducts(productsData.data);
    }).catch((errordata)=>
    {
        alert("Error while searching for women's clothing");
    })
    };
    const getMenwear=()=>
    {
    
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((productsData)=>
    {
        setProducts(productsData.data);
    }).catch((errordata)=>
    {
        alert("Error while searching for Menwear");
    })
    };
    const getJewelery=()=>
    {
    
    axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((productsData)=>
    {
        setProducts(productsData.data);
    }).catch((errordata)=>
    {
        alert("Error while searching for jewelery");
    })
    };

    


    return (
        <div className="products ">
            <div className="radioSelection">
            <div className="form-check form-check-inline ">
            <input type="radio" name="category"  className="form-check-input" onChange={getAllproducts}/>
            <label className="form-check-label">All</label>
            </div>
            <div className="form-check form-check-inline">
            <input type="radio" name="category" value="electronics"  className="form-check-input"  onChange={getElectronics}/>
            <label className="form-check-label" >Electronics</label>
            </div>
            <div className="form-check form-check-inline">
            <input type="radio" name="category" value="women wear" className="form-check-input"  onChange={getWomenwear}/>
            <label className="form-check-label" >Women Wear</label>
            </div>
            <div className="form-check form-check-inline">
            <input type="radio" name="category" value="men wear"  className="form-check-input" onChange={getMenwear}/>
            <label className="form-check-label" 
            >Men Wear</label>
            </div>
            <div className="form-check form-check-inline">
            <input type="radio" name="category" value="jewellery"  className="form-check-input" onChange={getJewelery}/>
            <label className="form-check-label" 
            >Jewellery</label>
            </div>
            </div>
            <div>
            <h2>
            Number of products are: 
            {products.length}
        </h2>
            </div>
            <div className="productsSection">
                {
                    products.map(function(elements,index)
                    {
                    return (
                    <Product 
                        image={elements.image}
                        title={elements.title}
                        price={elements.price}
                        category={elements.category}/>
                    );
                    })   
                }            
            </div>
        </div>
    );
}

export default Products




