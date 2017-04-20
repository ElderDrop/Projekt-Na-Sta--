//redo the date picker by destroing datepickers
function resetDatepickers(){
             $( "#datepicker" ).datepicker( "destroy"  );
             $( "#datepicker" ).datepicker({
                        minDate: new Date(1970 , 1 - 1, 1),
                        defaultDate: new Date(1980 , 1 - 1, 1),
                        changeMonth: true,
                        changeYear: true,
                        showButtonPanel: true
                        });
             $( "#datepicker2" ).datepicker( "destroy"  );
             $( "#datepicker2" ).datepicker({
                        minDate: new Date(1970 , 1 - 1, 1),
                        defaultDate: new Date(1980 , 1 - 1, 1),
                        changeMonth: true,
                        changeYear: true,
                        showButtonPanel: true
                        });
            for(var i = 0;i < persons.length;i++){
                $( "#" + persons[i].id ).removeClass("fadeByTime");
            }
}
//pagination by organisation of table
function organiseTable(value){
            //removes old data
            $(".data").remove();
            //sets first and last lelement indexes
            var end = value*5;
            value = (value-1)*5;
            if(filteredPersons.length == 0){
                filteredPersons = persons;
            }
            if( end > filteredPersons.length ){
                end = filteredPersons.length;
            }
            available = filteredPersons.length;
            table = [];
            for( var i = value ; i < end;i++ ){
                if( filteredPersons[i].isVisable() ){
                    table.push(filteredPersons[i]);
                }else{
                    end++;
                    if( end == filteredPersons.length ){
                        break;
                    }
                }
              
            }
            
            for( var i = 0; i < table.length;i++ ){
                $("#serviceList").append(table[i].creatRow());
                
                
            }
            
}
        function isInside(str, tab){
            for( var i = 0; i < tab.length;i++ ){
                if( tab[i] == str ){
                    return true;
                }
            }
            return false;
        }