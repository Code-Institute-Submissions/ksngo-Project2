
//****************function to toggle filter 1 button*********************************/



function showFilter1() {
    
    if ($('#left-btm').css('display') == 'none') {
        $('#left-btm').css('display','block')
        // mymap.setView([1.25, 103.85], 11)
    } else {
        $('#left-btm').css('display','none')
        mymap.setView([1.35, 103.85], 12)
    }

    
}


//****************function to toggle filter 2 button*********************************/

let filter2Element = document.querySelector('#right-layout')


function showFilter2() {
    
    if ($('#right-layout').css('display') == 'none') {
        $('#right-layout').css('display','block')
        
        mymap.setView([1.25, 103.85], 11)

    } else {
        
    
        $('#right-layout').css('display','none')
        mymap.setView([1.35, 103.85], 12)
    
        
    }

    
}


//****************function to toggle street button*********************************/

function showFilterStreet() {

    $('#town').css('display','none')
    $('#input-street').css('display','block')
} 



//****************function to toggle town button*********************************/

function showFilterTown() {

    $('#input-street').css('display','none')
    $('#town').css('display','flex')
} 