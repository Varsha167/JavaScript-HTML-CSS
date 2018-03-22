const inputs = document.querySelectorAll(".controls input")


function handleUpdate() {
  const suffix = this.dataset.sizing ||'' //dataset is the object created from data- attribute and blank is for color
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

console.log(inputs)


inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
