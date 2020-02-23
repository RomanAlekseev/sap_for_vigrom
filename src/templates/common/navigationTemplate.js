const template = current => {
  const html = `
         <a class="nav-item nav-link" href="/">Home </a>
         <a class="nav-item nav-link" href="#menu">Menu</a>
         <a class="nav-item nav-link" href="#items">Items</a>
         <a class="nav-item nav-link" href="#about">About</a>
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
