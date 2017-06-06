const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + f.elements[1].value
    /*ev.preventDefault()
    let f = ev.target document.getElementById('personForm')
    const heading = document.querySelector('h1')
    for(let i = 0; i < f.length; i++){
        heading.textContent += ' ' + f.elements[i].value + ' '
    }*/
}


personForm.addEventListener('submit', handleSubmit)
