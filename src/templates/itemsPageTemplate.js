import { formatArray } from "./templateUtils";

const template = ({ list, total }) => {
  return `<button class="goBackButton">GoBack</button>
  <div class="col-lg-d-flex mx-auto ">
  <h2 class="mr-5">Items</h2>
  <ul class="list-group list-group-horizontal-lg ">
    <li class="list-group-item"><a href="#menu">Menu</a></li>
    <li class="list-group-item"><a href="#items">Items</a></li>
    <li class="list-group-item"><a href="#about">About</a></li> 
  </ul>
  </div>
  <hr/>
  <ul class="mt-3 d-flex justify-content-around items">        
     ${formatArray(list)}
    </ul>
    <div class="mb-3"><b>Total: ${total}</b></div>
    `;
};

export default template;
