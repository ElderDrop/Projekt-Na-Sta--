function Person(id,firstName, lastName, dateOfBirth, serviceFunction,experience){
            //variables
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfBirth = dateOfBirth;
            this.serviceFunction = serviceFunction;
            this.experience = experience;   
            this.visable = [];
            this.visable[0] = true;
            this.visable[1] = true;
            this.date;

            //gets the right values for days and months and puts it in the date object
                var day = "";
                var k = 0;
                var month = "";
                var year = "";
                var hour = "";
                var minute = "";
                for( var i = 0; i < dateOfBirth.length;i++){
                    if( k == 0 && dateOfBirth[i] != "."){
                        day += dateOfBirth[i];
                    }
                    if( k == 0 && dateOfBirth[i] == '.'){
                        k+=1;
                        i++;
                        if(day.length != 2 ){
                            day = "0" + day;
                        }
                        
                    }
                    if( k == 1 && dateOfBirth[i] != '.'){
                        month += dateOfBirth[i];
                    }
                    if( k == 1 && dateOfBirth[i] == '.'){
                        i++
                        k++;
                        if( month.length != 2 ){
                            month = "0" + month;
                        }
                        
                    }
                    
                    if( k == 2 && dateOfBirth[i] != ' '){
                        year += dateOfBirth[i];
                    }
                    if( k == 2 && dateOfBirth[i] == ' '){
                        k++;
                        i++;
                        if( year.length != 4 ){
                            year = "0" + year;
                        }
                    }
                    
                    if( k == 3 && dateOfBirth[i] != ':'){
                        hour += dateOfBirth[i];
                    }
                    if( k == 3 && dateOfBirth[i] == ':'){
                        k++;
                        i++;
                        if( hour.length != 2 ){
                            hour = "0" + hour;
                        }
                    }
                    
                     if( k == 4 ){
                        minute += dateOfBirth[i];
                    }
                    
                }
                
                var date = new Date();
                date.setFullYear(Number(year),Number(month)-1,Number(day));
                date.setHours(Number(hour));
                date.setMinutes(Number(minute));
                this.date = date;
            //METHODS
            //retun html row
            this.creatRow = function(){
                var row = document.createElement("tr");
                row.innerHTML = '<td>'+ this.id +'</td><td>'+ this.firstName +'</td><td>'+ this.lastName +'</td><td>'+ this.dateOfBirth +'</td><td>'+ this.serviceFunction +'</td><td>'+ this.experience +'</td>';
                row.id = this.id;
                row.className += "data";
                return row;
            }
            this.isVisable = function(){
                
                for( var i = 0; i < this.visable.length;i++ ){
                    if(!this.visable[i]){
                        return false;
                    }
                }
                return true;
            }
        }