// This states is used for change the add cart and remove cart with conditional rendering
import { useState } from "react";
import { GoStarFill } from "react-icons/go";

// props to transfer the value.
// This component is cards of the product.
export const C1 = ({model, setcount ,count}) => {
   const [show,setshow]=useState(true);
   return (
<> 
<div class="card newcard">
    <div className="img"><div className="innimg">{model.img}</div> <div className={model.con.style}>{model.con.value}</div></div>
    <div class="card-body">
    <h5 class="card-title title">{model.itemname}</h5>
    <div className="starval">
    <p class="card-text str"><div className={model.star.style}>{model.star.value}</div></p>
    <p class="card-text str"><div className={model.star.style}>{model.star.value}</div></p>
    <p class="card-text str"><div className={model.star.style}>{model.star.value}</div></p>
    <p class="card-text str"><div className={model.star.style}>{model.star.value}</div></p>
    <p class="card-text str"><div className={model.star.style}>{model.star.value}</div></p>
    </div>
    <div className="priceval">
    <div class="card-text"><span className={model.price1.style}>{model.price1.price1}</span>-{model.price2.price2}</div>
    </div>
    {/* conditonal rendering  = ternary operator */}
    {show?<button className="btninn" onClick={()=>{setshow(!show); setcount(count +1)}}>{model.option}</button>: <button className="btninn" onClick={()=>{setshow(!show); setcount(count -1)}}>REMOVE FROM CART</button>}
   </div>
</div>
</>
  )
}
 
 
function Arrayofcards({setcount, count}){
// This is an array of list with data for card component
const data=[
{
    img:"450*350",
    // style able option used for class to show responsive type
    con: {
        value: "SALE",
        style: "disable",
      },
    itemname:"Fancy Products",
    // style disable option used for class to show responsive type
    star:{
        value:<GoStarFill/>,
        style:"disable",
      },
      price1:{
        price1:"$40.00",
        style:"pable",
      },
    price2:{
        price2:"$80.00",
      },
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "able",
      },
    itemname:"Special Item",
    star:{
        value:<GoStarFill/>,
        style:"stable",
      },
    price1:{
        price1:"$20.00",
        style:"pable",
      },
    price2:{
        price2:"$18.00",
      },
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "able",
      },
    itemname:"Sale Item",
    star:{
        value:<GoStarFill/>,
        style:"disable",
      },
    price1:{
        price1:"$50.00",
        style:"pable",
      },
    price2:{
        price2:"$25.00",
      },
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "disable",
      },
    itemname:"Popular Item",
    star:{
        value:<GoStarFill/>,
        style:"stable"
      },
    price1:{
        price1:"$40.00",
        style:"pable",
      },
    price2:{
        price2:"$45.00",
      },   
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "able",
      },
    itemname:"Sale Item",
    star:{
        value:<GoStarFill/>,
        style:"disable",
      },
    price1:{
        price1:"$50.00",
        style:"pable",
      },
    price2:{
        price2:"$25.00",
      },   
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "disable",
      },
    itemname:"Fancy Products",
    star:{
        value:<GoStarFill/>,
        style:"disable",
      },
    price1:{
        price1:"$40.00",
        style:"pable",
      },
    price2:{
        price2:"$80.00",
      },     
     option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "able",
      },
    itemname:"Special Item",
    star:{
        value:<GoStarFill/>,
        style:"stable",
      },
    price1:{
        price1:"$20.00",
        style:"pable",
      },
    price2:{
        price2:"$18.00",
      },     
    option:"ADD TO CART"
},
{
    img:"450*350",
    con: {
        value: "SALE",
        style: "disable",
      },
    itemname:"Popular Item",
    star:{
        value:<GoStarFill/>,
        style:"stable"
      },
    price1:{
        price1:"$40.00",
        style:"pable",
      },
    price2:{
        price2:"$45.00",
      },     
    option:"ADD TO CART"
}
]
return(
    <>
    {/* map to taken the array data */}
    {data.map((val,idx)=>(<C1 model={val} key={idx} setcount={setcount} count={count}/>))}
    </>
)
}
export default Arrayofcards;
