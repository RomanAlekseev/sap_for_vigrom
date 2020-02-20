import { formatArray } from "./templateUtils";

const template = ({ list }) => {
  return `<div>Items Component</div>
  <button class="goBackButton">GoBack</button>
    <ul>
      <li><a href="#menu">Menu</a></li> 
      <li><a href="#about">About</a></li>  
    </ul>
    <hr/>
    <ul>        
     ${formatArray(list)}
    </ul>
    `;
};

export default template;
