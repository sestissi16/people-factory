const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + ', ' + f.elements[1].value
    const textToAdd = document.createTextNode(f.personName.value + "'s favorite color is " + f.elements[1].value)
    const pElement = document.getElementById('newP')
    pElement.appendChild(textToAdd)
    document.getElementById('newP').style.color = f.elements[1].value.toLowerCase()
}



personForm.addEventListener('submit', handleSubmit)
