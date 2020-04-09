
//****************function to toggle display filters button*********************************/



function showFilters() {
    
    if ($('#filters-tier').css('display') == 'none') {
        $('#filters-tier').css('display','flex')
        // mymap.setView([1.25, 103.85], 11)
    } else {
        $('#filters-tier').css('display','none')
        mymap.setView([1.35, 103.85], 12)
    }

    
}


//****************function to toggle More filters button*********************************/




function showMoreFilters() {
    
    if ($('#filter-others').css('left') == '0px') {
        
        $('#filter-others').animate({left: '3999px'},'slow')
        $('#filter-others').css('flex','0')
        
    } else {
    $('#filter-others').animate({left: '0px'},'slow')
    $('#filter-others').css('flex','1')
    }

    
    

    // if ($('#filter-others').css('display') == 'none') {
    //     $('#filter-others').css('display','block')
        
    //     mymap.setView([1.25, 103.85], 11)

    // } else {
        
    
    //     $('#filter-others').css('display','none')
    //     mymap.setView([1.35, 103.85], 12)
    
    // }


    
}


//****************function to toggle street button*********************************/

function showFilterStreet() {

    $('#town').css('display','none')
    $('#input-street').css('display','block')
    
    $('#filter-others').css('flex','5')
} 



//****************function to toggle town button*********************************/

function showFilterTown() {

    $('#input-street').css('display','none')
    $('#town').css('display','flex')
    $('#filter-others').css('flex','1')
} 