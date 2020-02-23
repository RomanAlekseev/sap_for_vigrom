const template = current => {
  const html = `
         <a class="nav-item nav-link" href="/">Home </a>
         <a class="nav-item nav-link" href="#items">Items</a>
         <a class="nav-item nav-link" href="#about">About</a>
         <div class="dropdown position-relative">
           <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Menu
           </a>
         
           <div class="dropdown-menu position-absolute" aria-labelledby="dropdownMenuLink">
             <a class="dropdown-item" href="#items">Items</a>
             <a class="dropdown-item" href="#about">About</a>
           </div>
        </div>
          `;
  // Find active navigation element and add class="active"
  function findActiveElement(hash) {
    const patternBefore = new RegExp(
      `<a class="(nav-item nav-link)" href="(.*${hash})">`
    );
    return html.replace(patternBefore, `<a class="$1 active" href="$2">`);
  }

  return findActiveElement(current);
};

export default template;
