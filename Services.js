$(document).ready(function(){
    $("#option1").css("background-color","rgb(37, 132, 242)");
    $("#option1").css("color","whitesmoke");
    $("#servicediv2,#servicediv3,#servicediv4,#servicediv5").hide();
    $("#option1").click
    ( 
         function() 
         {
            $("#servicediv2,#servicediv3,#servicediv4,#servicediv5").hide();
            $("#servicediv1").show() ;
            $("#option1,#option2,#option3,#option4,#option5").css("background-color","rgb(235, 241, 243)");
            $("#option1,#option2,#option3,#option4,#option5").css("color","black");
            $("#option1").css("background-color","rgb(37, 132, 242)");
            $("#option1").css("color","whitesmoke");
         }
    )
    $("#option2").click
    ( 
         function() 
         {
            $("#servicediv1,#servicediv3,#servicediv4,#servicediv5").hide();
            $("#servicediv2").show() ;
            $("#option1,#option2,#option3,#option4,#option5").css("background-color","rgb(235, 241, 243)");
            $("#option1,#option2,#option3,#option4,#option5").css("color","black");
            $("#option2").css("background-color","rgb(37, 132, 242)");
            $("#option2").css("color","whitesmoke");
           
         }
    )
   
    $("#option3").click
    ( 
         function() 
         {
            $("#servicediv1,#servicediv2,#servicediv4,#servicediv5").hide();
            $("#servicediv3").show() ;
            $("#option1,#option2,#option3,#option4,#option5").css("background-color","rgb(235, 241, 243)");
            $("#option1,#option2,#option3,#option4,#option5").css("color","black");
            $("#option3").css("background-color","rgb(37, 132, 242)");
            $("#option3").css("color","whitesmoke");
         }
    )
    $("#option4").click
    ( 
         function() 
         {
            $("#servicediv1,#servicediv2,#servicediv3,#servicediv5").hide();
            $("#servicediv4").show() ;
            $("#option1,#option2,#option3,#option4,#option5").css("background-color","rgb(235, 241, 243)");
            $("#option1,#option2,#option3,#option4,#option5").css("color","black");
            $("#option4").css("background-color","rgb(37, 132, 242)");
            $("#option4").css("color","whitesmoke");
         }
    )
    $("#option5").click
    ( 
         function() 
         {
            $("#servicediv1,#servicediv2,#servicediv3,#servicediv4").hide();
            $("#servicediv5").show() ;
            $("#option1,#option2,#option3,#option4,#option5").css("background-color","rgb(235, 241, 243)");
            $("#option1,#option2,#option3,#option4,#option5").css("color","black");
            $("#option5").css("background-color","rgb(37, 132, 242)");
            $("#option5").css("color","whitesmoke");
         }
    )
 
   
   
})