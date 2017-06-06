const personForm = document.querySelector('#personForm')

function renderColor(color){
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div
    /*return `
        <div style="background-color: ${color}; width:100px; height:50px"></div>
    `*/
}

function renderListItem(label, value){
    const item = document.createElement('li')
    item.innerHTML = `${label}: ${value}` 
    return item           
}

function renderList(personData){
    const list = document.createElement('ul')

    //['name', 'favoriteColor', 'age']
    Object.keys(personData).map(function(label){
        const item = renderListItem(label, personData[label])
        list.appendChild(item)
    })
    return list
}

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')

    //const colorDiv = `<div style="background-color: ${favoriteColor}; width:100px; height:50px"></div>`

    const person = {
        name: f.personName.value,
        favoriteColor: renderColor(f.favoriteColor.value).outerHTML,
        age: f.age.value,
    }

    details.appendChild(renderList(person))

    //This does the same thing as... 
    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name

    //...this right here
    //details.innerHTML += `<strong>${name}</strong>`
    //details.appendChild(boldedName)

    /*details.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Favorite Color: ${colorDiv}</li>
            <li>Age: ${age}</li>
        </ul>
    `*/

    /*const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + ', ' + f.personColor.value
    const textToAdd = document.createTextNode(f.personName.value + "'s favorite color is " + f.personColor.value)
    const pElement = document.getElementById('newP')
    pElement.appendChild(textToAdd)
    document.getElementById('newP').style.color = f.personColor.value.toLowerCase()*/
}

personForm.addEventListener('submit', handleSubmit)
