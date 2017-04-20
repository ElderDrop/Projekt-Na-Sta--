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
            //puts into table only visable elements
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
            //fil table with right rows
            for( var i = 0; i < table.length;i++ ){
                $("#serviceList").append(table[i].creatRow());           
            }
            
}
//return true if element is inside the table
    function isInside(str, tab){
            for( var i = 0; i < tab.length;i++ ){
                if( tab[i] == str ){
                    return true;
                }
            }
            return false;
        }