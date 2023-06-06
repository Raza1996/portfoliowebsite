const aElements = document.querySelectorAll('.hoverHither');
const bElements = document.querySelectorAll('.triggerTither');

for (let i = 0; i < aElements.length; i++) {
  const a = aElements[i];
  const b = bElements[i];

console.log("here");
  a.addEventListener('mouseover', () => {console.log('sup');
    b.dispatchEvent(new MouseEvent('mouseover'));
  });

  a.addEventListener('mouseleave', () => {
    b.dispatchEvent(new MouseEvent('mouseout'));
  });

}