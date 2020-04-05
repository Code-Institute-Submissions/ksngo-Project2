

/****************************run 50 loops to checked all 50 checkboxes and plot the each marker onto map in each loop ***********************************************************/
/*********Failed attempt hence resorting to this method: unable to plot markers automatically
 when plotall function runs to change property of all checkboxes of checked to true**********/

function plotAll () {
    for (i=0; i<checkboxIdArray.length;i++) {
        $('#'+checkboxIdArray[i]).prop('checked',true)

        let tableIndex = checkboxIdArray[i].replace('checkboxId','')
        plot(tableIndex)
    }

    
    

}

    