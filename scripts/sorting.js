//Function is sorting by column name
//typeOfSort for example: id
        function sorting(typeOfSort){
            incrementSort(typeOfSort);
            resetArrows()
            if( typeOfSort == "id" ){
                if( sort[typeOfSort] == 1 ){
                     sort[typeOfSort] = 0
                }
                if( sort[typeOfSort] == 2 ){
                     persons.sort(function( a, b ){return b.id - a.id});
                     $("#idArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }        
            if( typeOfSort == "firstName" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.lastName.localeCompare(b.lastName)});
                    persons.sort(function( a, b ){return a.firstName.localeCompare(b.firstName)});
                    $("#firstNameArrow").addClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.lastName.localeCompare(a.lastName)});
                    persons.sort(function( a, b ){return b.firstName.localeCompare(a.firstName)});
                    $("#firstNameArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }
        
            if( typeOfSort == "lastName" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.firstName.localeCompare(b.firstName)});
                    persons.sort(function( a, b ){return a.lastName.localeCompare(b.lastName)});
                    $("#lastNameArrow").addClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
                }
                if( sort[typeOfSort] == 2 ){              
                    persons.sort(function( a, b ){return b.firstName.localeCompare(a.firstName)});
                    persons.sort(function( a, b ){return b.lastName.localeCompare(a.lastName)});
                     $("#lastNameArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }
            if( typeOfSort == "dateOfBirth" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){ return a.date.getTime() - b.date.getTime()});
                    $("#dateArrow").addClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){ return b.date.getTime() - a.date.getTime()});
                    $("#dateArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }
            if( typeOfSort == "serviceFunction" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.serviceFunction.localeCompare(b.serviceFunction)});
                    $("#functionArrow").addClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.serviceFunction.localeCompare(a.serviceFunction)});
                    $("#functionArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }
            if( typeOfSort == "experience" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.experience-b.experience});
                    $("#expirienceArrow").addClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.experience-a.experience});
                    $("#expirienceArrow").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
                }
            }
            if( sort[typeOfSort] == 0){
                resetSort();
                persons.sort(function( a, b ){return a.id - b.id});
            }
            
            organiseTable(page);


}
function incrementSort(typeOfSort){
             if( sort[typeOfSort] == 2 ){
                sort[typeOfSort] = 0;
            }else{
                sort[typeOfSort]++;
            }
}
function resetSort(){
        sort["id"] = 1;
        sort["firstName"] = 0;
        sort["lastName"] = 0;
        sort["dateOfBirth"] = 0;
        sort["serviceFunction"] = 0;
        sort["experience"] = 0;
       $("#idArrow").addClass("glyphicon-arrow-up")
}
function resetArrows(){
        $("#firstNameArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
        $("#idArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
        $("#lastNameArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
        $("#dateArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
        $("#functionArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
        $("#expirienceArrow").removeClass("glyphicon-arrow-up").removeClass("glyphicon-arrow-down");
}