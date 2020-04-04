
//**************select all towns checkbox *******************/
document.querySelector('#selectAllTown').addEventListener('change' , function(){

    if(this.checked) {
        selectAllTown()
    } else {
        unselectAllTown ()
    }
})


//****************function getValueTown()***************************/
function getValueTown () {

    
    let townCheckBoxes =document.getElementsByName('town')
    let selectedTown =[]

    for (i=0; i<townCheckBoxes.length;i++){
        if (townCheckBoxes[i].checked) {
            selectedTown.push(townCheckBoxes[i].value)
        }
    }


    return selectedTown

}

//****************function getValueStreet()***************************/
function getValueStreet () {

    let selectedStreet = document.querySelector('#input-street select').value
    return selectedStreet
    
}

//****************function to checked all town checkboxes)***************************/
function selectAllTown () {

    let townCheckBoxes = document.getElementsByName('town')

    for (i=0;i<townCheckBoxes.length;i++) {
        townCheckBoxes[i].checked = true
    }

}

//****************function to unchecked all town checkboxes)***************************/
function unselectAllTown () {

    let townCheckBoxes = document.getElementsByName('town')

    for (i=0;i<townCheckBoxes.length;i++) {
        townCheckBoxes[i].checked = false
    }

}