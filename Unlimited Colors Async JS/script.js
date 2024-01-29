const stop = document.querySelector('#stop');

const randomColor = () => {
  let color = '#';
  const hex = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  return color;
};
let interval;
const startColorChange = () => {
  let changeBGColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  interval = setInterval(changeBGColor, 1000);
};
const stopColorChange = () => {
  // document.body.style.backgroundColor = "black";
  clearInterval(interval);
};

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);
