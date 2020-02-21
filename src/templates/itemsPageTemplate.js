import { formatArray } from "./templateUtils";

const template = ({ list, total }) => {
  return `<button class="goBackButton">GoBack</button>
  <div class="col-lg-d-flex align-items-center">
  <h2 class="mr-5">Items</h2>
  <ul class="list-group list-group-horizontal-xl">
    <li class="list-group-item"><a href="#menu">Menu</a></li>
    <li class="list-group-item"><a href="#items">Items</a></li>
    <li class="list-group-item"><a href="#about">About</a></li> 
  </ul>
  </div>
  <hr/>
  <ul class="mt-3">        
     ${formatArray(list)}
    </ul>
    <span>Total: ${total}</span>
    `;
};

export default template;
