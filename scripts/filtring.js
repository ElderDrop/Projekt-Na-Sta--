//filtr function
function filtring(){
                //clears table of element which one will be shown
                filteredPersons = []
                var data = $(".data").clone();
                if(dateTwo < dateOne){
                    var tmp = dateOne;
                    dateOne = dateTwo;
                    dateTwo = tmp;
                }
                //filtrs element fullfill requirements stays viable by puting element into table
                for(var i = 0; i < persons.length;i++){
                    var person = persons[i];
                    var value = $("#experiencesOptions").val();
                    value = value.substring(7,value.length)
                    if(value == "Brak filtru"){
                             person.visable[0] = true;
                    }else{
                        if( person.experience != value ){
                            person.visable[0] = false;
                        }else{
                            person.visable[0]= true;
                        }
                    
                    }

                    value = $( "#servicesFunctionsOptions" ).val();
                    value = value.substring(7,value.length);
                    
                    if( value == "Brak filtru" ){
                            person.visable[1] = true;

                    }else{
                        if( person.serviceFunction != value ){
                            person.visable[1]  = false;
                        }else{
                                person.visable[1] = true;
                        }
                    }

                    value = $("#wantedFirstName").val().trim().toLowerCase();
                    if( value.length == 0 ){
                            person.visable[2] = true;
                    }
                    if( value.length > 0 ){
                        if( person.firstName.toLowerCase().includes(value) ){
                            person.visable[2]  = true;
                        }else{
                            person.visable[2]  = false;
                        }
                    }

                    value = $("#wantedLastName").val().trim().toLowerCase();
                    if( value.length == 0 ){
                        person.visable[3]  = true;
                    }
                    if( value.length > 0 ){
                        if( person.lastName.toLowerCase().includes(value) ){
                            person.visable[3]  = true;
                        }else{
                            person.visable[3]  = false;
                        }
                    }
                    var tmpDate = new Date(person.date.getFullYear(),person.date.getMonth(),person.date.getDay(),0,0,0,0);
                    if(dateOne != null && dateTwo != null){
                        if(dateOne.getTime() <= tmpDate.getTime() && dateTwo.getTime() >= tmpDate.getTime()){
                                person.visable[4]  = true;
                            }else{
                                person.visable[4]  = false;
                            }
                    }
                    
                //if after all filtrs object is viasble put it into table to show
                if( person.isVisable() ){
                    filteredPersons.push( person );
                }
            }
                //creats proper amount of page buttons
                $("#pagetation li").remove();
                if(filteredPersons.length != 0){
                    pages = 1;
                    for( var i = 0; i < filteredPersons.length;i++){
                        if(i%5 == 0){
                            $("#pagetation").append("<li onclick='organiseTable("+ pages +")' value="+ pages +"><a href='#'>"+ pages +"</a></li>");
                            pages++;
                        }
                    }
                }
                organiseTable(1);
    }
        //both functions use only filtring function
        $("#experiencesOptions").change(function(){
            filtring();
        });
        $("#servicesFunctionsOptions").change(function(){
            filtring();
        });