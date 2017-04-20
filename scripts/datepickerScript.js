//datepicker creat options and onchange funtions
$( function() {
             $( "#datepicker" ).datepicker({
                    minDate: new Date(1970 , 1 - 1, 1),
                    defaultDate: new Date(1980 , 1 - 1, 1),
                    changeMonth: true,
                    changeYear: true,
                    showButtonPanel: true
                  })
                 .on("change",function(){
                     dateOne = new Date(this.value.substring(6,10),Number(this.value.substring(0,2))-1,Number(this.value.substring(3,5)),0,0,0);
                     if(dateTwo != null){
                        filtring();
                     }
                 });
                  $( "#datepicker2" ).datepicker({
                        minDate: new Date(1970 , 1 - 1, 1),
                        defaultDate: new Date(1980 , 1 - 1, 1),
                        changeMonth: true,
                        changeYear: true,
                        showButtonPanel: true
                        })
                 .on("change",function(){
                     dateTwo = new Date(this.value.substring(6,10),Number(this.value.substring(0,2))-1,Number(this.value.substring(3,5)),0,0,0);
                     if(dateOne != null){
                        filtring();
                     }
                 });
});

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