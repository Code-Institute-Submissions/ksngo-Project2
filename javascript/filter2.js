document.querySelector('#testing').addEventListener('click', getValueYears)

function getValueYears () {

    let selectedMinYears = document.querySelector('#min-year').value
    let selectedMaxYears = document.querySelector('#max-year').value
    console.log(selectedMinYears)
    console.log(selectedMaxYears)
    return selectedMinYears
    
}



