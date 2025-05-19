const boxes = document.querySelectorAll('.card');
const links = [
  '1/index.html',
  '2/index.html',
  '3/index.html',
  '4/index.html',
  '5/index.html'
];
boxes.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.location.href = links[index];
  });
});