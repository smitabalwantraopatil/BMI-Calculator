const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#result")
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter valid number"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please enter valid number"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.6) {
            result.innerHTML = `your bmi is ${bmi} and your under weight`
        } else if (bmi > 18.7 && bmi < 24.9) {
            result.innerHTML = `your bmi is ${bmi} and your Normal weight`
        } else if (bmi > 25 && bmi < 30) {
            result.innerHTML = `your bmi is ${bmi} and your Over weight`
        } else {
            result.innerHTML = `your bmi is ${bmi} and your obisity`
        }
    }
})