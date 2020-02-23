import { formatArray } from "./templateUtils";

const template = ({ list, total }) => {
  return `<button class="goBackButton">GoBack</button>
  <div class="col-lg-d-flex mx-auto ">
  <h2 class="mr-5">Items</h2>
  </div>
  <hr/>
  <div class="mt-3 d-flex justify-content-around items">        
     ${formatArray(list)}
    </div>
    <div class="mb-3"><b>Total: ${total}</b></div>
    `;
};

export default template;
