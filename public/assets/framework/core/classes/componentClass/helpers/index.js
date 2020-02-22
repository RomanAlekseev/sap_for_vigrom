export function renderComponent(component) {
  component.render();

  if (component.didMount) component.didMount();
}
