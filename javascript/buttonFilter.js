
//****************function to toggle display filters button*********************************/



function showFilters() {
    
    if ($('#filters-tier').css('display') == 'none') {
        $('#map-tier').css('height', '60vh')
        $('#filters-tier').css('display','flex')
        $('#button-show-filters h3').text('Hide filters')
        // mymap.setView([1.25, 103.85], 11)
    } else {
        $('#map-tier').css('height', '80vh')
        $('#filters-tier').css('display','none')
        $('#button-show-filters h3').text('Display filters')
        mymap.setView([1.35, 103.85], 12)
    }

    
}


//****************function to toggle More filters button*********************************/




function showMoreFilters() {
    
    if ($('#filter-others').css('left') == '0px') {
        
        $('#filter-others').animate({left: '3999px'},'slow')
        
       setTimeout(function(){ $('#filter-others').css('flex','0')},199)
       setTimeout(function(){$('#filter-others').css('display', 'none')},199)
       setTimeout(function(){$('#button-more-filters').html(`<i class="fa fa-chevron-left" aria-hidden="true"></i>&emsp;&emsp;show extra filters`)},199)

        
        
    } else {
        
        if ($('#input-street').css('display') != 'none') {
            $('#filter-others').animate({left: '0px'},'slow')
            setTimeout(function(){$('#filter-others').css('display', 'block')},199)
            setTimeout(function(){ $('#filter-others').css('flex','5')},199)
            setTimeout(function(){$('#button-more-filters').html(`hide extra filters&emsp;&emsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>`)},199)
        } else {
            $('#filter-others').animate({left: '0px'},'slow')
            setTimeout(function(){$('#filter-others').css('display', 'block')},199)
            setTimeout(function(){ $('#filter-others').css('flex','1')},199)
            setTimeout(function(){$('#button-more-filters').html(`hide extra filters&emsp;&emsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>`)},199)
        }
    
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
    $('#button-filter-street').css('backgroundColor','#ab576c')
    $('#button-filter-town').css('backgroundColor','#6a8494')
} 



//****************function to toggle town button*********************************/

function showFilterTown() {

    $('#input-street').css('display','none')
    $('#town').css('display','flex')
    $('#filter-others').css('flex','1')
    $('#button-filter-town').css('backgroundColor','#ab576c')
    $('#button-filter-street').css('backgroundColor','#6a8494')

} 


//*****************function to add eventlistener for hover over background color change effect for middle primary buttons*********************** */

function hoverOverBgColorChange (elementID) {
    document.querySelector(elementID).addEventListener('mouseover', function(){
        this.style.backgroundColor = '#ab576c'
    })
    document.querySelector(elementID).addEventListener('mouseout', function(){
        this.style.backgroundColor = '#6a8494 '
    })
}
