const loadData = () => {
  axios.get('circuit.json').then(({ data: { panel } }) => {
    for (const [key, value] of Object.entries(panel)) {
      createMarker(key, value);
    }
  });
};

const createMarker = (key, value) => {
  let scene = document.querySelector('a-scene');
  let marker = document.createElement('a-marker');
  marker.setAttribute('type', 'barcode');
  marker.setAttribute('value', key - 1);
  let text = createText(key - 1, value);
  marker.appendChild(text);
  scene.appendChild(marker);
};

const createText = (key, value) => {
  let text = document.createElement('a-text');
  text.setAttribute('value', value);
  text.setAttribute('rotation', { x: -90, y: 0, z: 0 });
  text.setAttribute('align', key % 2 ? 'left' : 'right');
  text.setAttribute('position', { x: key % 2 ? 1 : -1, y: 0, z: 0 });
  return text;
};

window.onload = () => {
  loadData();
};
