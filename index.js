const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    const colorDiv = `<div style="background-color: ${favoriteColor}; width:100px; height:50px"></div>`

    const bulletedList = document.createElement('ul')
    const nameBullet = document.createElement('li')
    const colorBullet = document.createElement('li')
    const ageBullet = document.createElement('li')

    nameBullet.textContent = `Name: ${name}`//'Name: ' + name``
    colorBullet.innerHTML = `Favorite Color: ${colorDiv}` //'Favorite Color: ' 
    ageBullet.textContent = `Age: ${age}`//'Age: ' + age
    

    details.appendChild(bulletedList)
    bulletedList.appendChild(nameBullet)
    bulletedList.appendChild(colorBullet)
    bulletedList.appendChild(ageBullet)
    

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
