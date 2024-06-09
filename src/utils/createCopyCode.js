let blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
  let button = document.createElement('copy-code');
  block.appendChild(button);
});
