const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  //only after clicking submit should we take the values, so we declare them inside the event listener
  e.preventDefault();
  const h = document.querySelector('#height').value;
  const height = parseInt(h);
  const w = document.querySelector('#weight').value;
  const weight = parseInt(w);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Give valid weight';
  } else {
    const p = document.createElement('p');
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      p.innerHTML = `Your BMI is ${bmi} and you are Underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      p.innerHTML = `Your BMI is ${bmi} and you are Normal weight`;
    } else {
      p.innerHTML = `Your BMI is ${bmi} and you are Overweight`;
    }
    result.appendChild(p);
  }
});
