// This import component used for font.(react font is used)
import { FaShoppingCart } from "react-icons/fa";
// This is navbar component
export const Header = ({count}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navmar">
    <a class="navbar-brand topheading" href="#">Star Bootstrap</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">All Products</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Popular Items</a>
            <a class="dropdown-item" href="#">New Arrivals</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        {/* count is an value taken form main component app.jsx here act as props */}
       <button class="btn btn-outline-dark my-2 my-sm-1" type="submit"><span class="cart"><FaShoppingCart/></span> <span className="cvalue"> Cart <span className="value">{count}</span> </span></button>
       
      </form>
    </div>
  </nav>
     )
}

