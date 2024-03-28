import './App.css'
// They used bootstrap for an reponsive design
import 'bootstrap/dist/css/bootstrap.min.css';
// Components import
import { Header } from './components/Header';
import { B1 } from './components/B1';
import Arrayofcards, { C1 } from './components/C1';
// Footer created not added in the main component
import { Footer } from './components/Footer';
//States condition
import { useState } from 'react';

function App() {
  // {states} This states taken the value to cart and button options...(Header component and arrayofcards component)
  const [count, setcount] =useState(0);
return (
     <>
     {/* Header component */}
    <Header count={count}/>
    {/* Body of the content */}
    <B1/>
    {/* Individual cards of the products */}
     <div className='shop'>
      <div className='showitems'>
        {/* Here the states value transfer to this component(like props) */}
      <Arrayofcards setcount={setcount} count={count}/>
      </div>
    </div>
   </>
  )
}
export default App
