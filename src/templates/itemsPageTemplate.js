const template = list => {
  return `<div>Items Component</div>
    <ul>
      <li><a href="#menu">Menu</a></li> 
      <li><a href="#about">About</a></li>  
    </ul>
    <hr/>
    <ul>        
     ${list}
    </ul>
    `;
};

export default template;