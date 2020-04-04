
//***************************from https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty *********/
//******************to check if an object {} is empty */

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}