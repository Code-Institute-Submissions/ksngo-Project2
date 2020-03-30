
document.querySelector('#testing').addEventListener('click', getValueTown)


function getValueTown () {

    
    let townCheckBoxes =document.getElementsByName('town')
    let selectedTown =[]

    for (i=0; i<townCheckBoxes.length;i++){
        if (townCheckBoxes[i].checked == false) {
            selectedTown.push(townCheckBoxes[i].value)
        }
    }

    console.log(selectedTown)

    return selectedTown

}

function getValueStreet () {

    let selectedStreet = document.querySelector('#input-street select').value
    return selectedStreet
    
}

