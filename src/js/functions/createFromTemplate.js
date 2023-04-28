function createFromTemplate(template) {
  // eslint-disable-next-line no-undef
  const element = document.createElement('template');
  element.innerHTML = template.trim();
  return element.content.firstChild;
}

export default createFromTemplate;
