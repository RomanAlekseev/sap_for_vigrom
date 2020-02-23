import { formatArray } from "./templateUtils";

const template = ({ list, total }) => {
  return `
  <div class="col-lg-d-flex mx-auto ">
  <h2 class="mr-5">Items</h2>
  </div>
  <hr/>
  <div class="mt-3 d-flex flex-wrap flex-column flex-lg-row align-items-center justify-content-between items">        
     ${formatArray(list)}
    </div>
    <a href="#" class="mb-3 total" title="Buy Now"><b>Total: ${total}</b></a>
    `;
};

export default template;
