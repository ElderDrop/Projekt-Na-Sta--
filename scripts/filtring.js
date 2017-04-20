function filtring(){
                filteredPersons = []
                var data = $(".data").clone();
                if(dateTwo < dateOne){
                    var tmp = dateOne;
                    dateOne = dateTwo;
                    dateTwo = tmp;
                }
                //for( var i = 0; i < data.length; i++ ){
                    //var parent = data.get(i);
                    //var person = new Person( Number(parent.children[0].innerText.trim()),parent.children[1].innerText.trim(),parent.children[2].innerText.trim(),parent.children[3].innerText.trim(),parent.children[4].innerText.trim(),parent.children[5].innerText.trim());
                for(var i = 0; i < persons.length;i++){
                    var person = persons[i];
                    var value = $("#experiencesOptions").val();
                    value = value.substring(7,value.length)
                    if(value == "none"){
                        if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                            if( $( "#" + person.id ).hasClass("fadeByExp") ){
                                $( "#" + person.id ).fadeIn();
                            }
                            $( "#" + person.id ).removeClass("fadeByExp");
                             person.visable[0] = true;
                         }
                    }else{
                        if( person.experience != value ){
                            $( "#" + person.id ).fadeOut().addClass("fadeByExp");
                            person.visable[0] = false;
                        }else{
                            if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                $( "#" + person.id ).fadeIn();
                                $( "#" + person.id ).removeClass("fadeByExp");
                                person.visable[0]= true;
                            }
                        }
                    
                    }

                    value = $( "#servicesFunctionsOptions" ).val();
                    value = value.substring(7,value.length);
                    
                    if( value == "none" ){
                      if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                            if( $( "#" + person.id ).hasClass("fadeByServ") ){
                                $( "#" + person.id ).fadeIn();
                            }
                            $( "#" + person.id ).removeClass("fadeByServ");
                            person.visable[1] = true;
                         }
                    }else{
                        if( person.serviceFunction != value ){
                            $( "#" + person.id ).fadeOut().addClass("fadeByServ");
                            person.visable[1]  = false;
                        }else{
                            if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                $( "#" + person.id ).fadeIn();
                                $( "#" + person.id ).removeClass("fadeByServ");
                                person.visable[1] = true;
                            }
                        }
                    
                    }

                    value = $("#wantedFirstName").val().trim().toLowerCase();
                    if( value.length == 0 ){
                        $( "#" + person.id ).removeClass("fadeByFirstName");
                        if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                $( "#" + person.id ).fadeIn();
                            }
                            person.visable[2] = true;
                    }
                    if( value.length > 0 ){
                        if( person.firstName.toLowerCase().includes(value) ){
                            if( !$( "#" + person.id ).hasClass(/fadeBy/) ){
                                $( "#" + person.id ).fadeIn();
                            }
                            $( "#" + person.id ).removeClass("fadeByFirstName");
                            person.visable[2]  = true;
                        }else{
                            $( "#" + person.id ).fadeOut().addClass("fadeByFirstName");
                            person.visable[2]  = false;
                        }
                    }

                    value = $("#wantedLastName").val().trim().toLowerCase();
                    if( value.length == 0 ){
                        $( "#" + person.id ).removeClass("fadeByLastName");
                        if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                $( "#" + person.id ).fadeIn();
                            }
                        person.visable[3]  = true;
                    }
                    if( value.length > 0 ){
                        if( person.lastName.toLowerCase().includes(value) ){
                            if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                $( "#" + person.id ).fadeIn();
                            }
                            $( "#" + person.id ).removeClass("fadeByLastName");
                            person.visable[3]  = true;
                        }else{
                            $( "#" + person.id ).fadeOut().addClass("fadeByLastName");
                            person.visable[3]  = false;
                        }
                    }
                    var tmpDate = new Date(person.date.getFullYear(),person.date.getMonth(),person.date.getDay(),0,0,0,0);
                    if(dateOne != null && dateTwo != null){
                        if(dateOne.getTime() <= tmpDate.getTime() && dateTwo.getTime() >= tmpDate.getTime()){
                                if(!$( "#" + person.id ).hasClass(/fadeBy/)){
                                    $( "#" + person.id ).fadeIn();
                                }
                                $( "#" + person.id ).removeClass("fadeByTime");
                                person.visable[4]  = true;
                            }else{
                                $( "#" + person.id ).fadeOut().addClass("fadeByTime");
                                person.visable[4]  = false;
                            }
                    }
                    
                    
                if( person.isVisable() ){
                    filteredPersons.push( person );
                }
                }
                organiseTable(1);
                
}
        $("#experiencesOptions").change(function(){
            filtring();
        });
        $("#servicesFunctionsOptions").change(function(){
            filtring();
        });