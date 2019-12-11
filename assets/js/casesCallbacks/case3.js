function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

document.querySelector("h5").innerHTML = toCelsius;