import React from 'react'
import "./Product.css";

// function Product(props)
// {
//     return (
//         <div className="productsCard">
//             <img src={props.image} width={"100%"} height={"200px"} alt="images"/>
//             <p>
//                 <b>{props.title}</b>
//             </p>
//             <p>
//                 <b>{props.category}</b>
//             </p>
//             <p>${props.price}</p>
//             <button className="btn btn-outline-secondary">Check</button>
//         </div>
//     )
// }
function Product({image,title,category,price})
{
    return (
        <div className="productsCard">
            <img src={image} width={"100%"} height={"200px"} alt="images"/>
            <p class="title1">
                <b>{title}</b>
            </p>
            <p>
                <b>{category}</b>
            </p>
            <p>${price}</p>
            <button className="btn btn-outline-danger">Check</button>
        </div>
    )
}
export default Product
