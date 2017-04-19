//1 asc, 2 desc, 0 none
        function sorting(typeOfSort){
            incrementSort(typeOfSort)
            if( typeOfSort == "id" ){
                if( sort[typeOfSort] == 1 ){
                     persons.sort(function( a, b ){return a.id - b.id});
                }
                if( sort[typeOfSort] == 2 ){
                     persons.sort(function( a, b ){return b.id - a.id});
                }
            }        
            if( typeOfSort == "firstName" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.lastName.localeCompare(b.lastName)});
                    persons.sort(function( a, b ){return a.firstName.localeCompare(b.firstName)});
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.lastName.localeCompare(a.lastName)});
                    persons.sort(function( a, b ){return b.firstName.localeCompare(a.firstName)});
                }
            }
            if( typeOfSort == "firstName" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.lastName.localeCompare(b.lastName)});
                    persons.sort(function( a, b ){return a.firstName.localeCompare(b.firstName)});
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.lastName.localeCompare( a.lastName )});
                    persons.sort(function( a, b ){return b.firstName.localeCompare( a.firstName )});
                }
            }
            if( typeOfSort == "lastName" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort( function( a, b ){return a.firstName.localeCompare(b.firstName)});
                    persons.sort( function( a, b ){return a.lastName.localeCompare(b.lastName)});
                }
                if( sort[typeOfSort] == 2 ){              
                    persons.sort( function( a, b ){return b.firstName.localeCompare(a.firstName)});
                    persons.sort( function( a, b ){return b.lastName.localeCompare(a.lastName)});
                }
            }
            if( typeOfSort == "dateOfBirth" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort( function( a, b ){ return a.date.getTime() - b.date.getTime()});
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort( function( a, b ){ return b.date.getTime() - a.date.getTime()});
                }
            }
            if( typeOfSort == "serviceFunction" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.serviceFunction.localeCompare(b.serviceFunction)});
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.serviceFunction.localeCompare(a.serviceFunction)});
                }
            }
            if( typeOfSort == "experience" ){
                if( sort[typeOfSort] == 1 ){
                    persons.sort(function( a, b ){return a.experience-b.experience});
                }
                if( sort[typeOfSort] == 2 ){
                    persons.sort(function( a, b ){return b.experience-a.experience});
                }
            }
            if( sort[typeOfSort] == 0){
                persons.sort(function( a, b ){return a.id - b.id});
            }
            for(var i = 0; i < persons.length;i++){
                  idClasses[persons[i].id] = $( "#" + persons[i].id ).attr("class");
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