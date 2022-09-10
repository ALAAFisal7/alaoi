
//__________________________java script_______________________________


var ala = document.getElementById("for");

function farfar(){
if(ala.name.value==""){
alert("Please enter the name field");
return false;
}

else if(ala.number_emp.value==""){
alert("Please enter the  number_emp field");
return false;
}

 else if(ala.password.value==""){
alert("Please enter the  password field");
return false;
}

else if(ala.email.value==""){
alert("Please enter the  email field");
return false;
}

}



function information(){
     var Employee_Name =info.name.value;

     var Employee_Number =info.number_emp.value;
     var password_employee =info.password.value;
     var Email_employee=info.email.value;



// لعرض جميع البيانالت المدخله في الفورم وعرضها في صفحه اخرى 
  document.writeln("<center>");
  document.writeln("<table callpading='5'  width='50%' height='30%'  border='5px' aling='center' bgcolor='#ff0'    bordercolor='#000' >");
  // هنه لعرض العنوان في الصفحه التي تريد عرض البيانات المدخله فيها
  document.writeln("<caption> <h3> information employee</h3></caption>");
  
  
  document.writeln("<tr>      <td width='35px'>     <b>name</b>         </td>   <td>"+  Employee_Name + "     </td>          </tr>");
  document.writeln("<tr>     <td width='35px'>      <b>number_emp</b>   </td>   <td>"+  Employee_Number + "    </td>         </tr>");
  document.writeln("<tr>     <td width='35px'>      <b>password</b>     </td>   <td>"+ password_employee + "  </td>         </tr>");
  document.writeln("<tr>     <td width='35px'>      <b>email</b>        </td>   <td>"+  Email_employee + "     </td>         </tr>");
 
  document.writeln("</table>");
 document.writeln("</center>");

 
}

//__________________________________jquery___________________


// نستخدم مكتبة الجيكويري لعرض محتوى حقول الادخال في  وسم معين على نفس الصفحة

$(document).ready(function(){
     $("#submit").click(function(){
          //هاذه الكود لعرض جميع المحتويات في نس ال div
         // $("#d").text("  Name:"  + $("#input1").val()+" " +"Number :"+ $("#input2").val()  +" "+"Password:"+$("#input3").val()  +" "+"Email:"+$("#input4").val()  );
      
        // $("#d").text(" Name:"  + $("#input1").val()  );
         $("#nameid").text( $("#input1").val()  );
         
      //  $("#dd").text(" Number :"  + $("#input2").val()  );
       //  $("#ddd").text(" Password:"  + $("#input3").val()  );
     // $("#dddd").text(" Email:"  + $("#input4").val()  );
     
     });
     });
     
     
     
     //  هنه نستخمد كذالك كود جيكويري عند لمس اي زر يغير لون   النص الموجود مابعد العنوان
  /*   $(document).ready(function(){
     
          $("#submit").hover(function(){
              $("#pp").css("color","#f00");
              $("#pp").css("background","#000808");
          });
      });

      */
      $(document).ready(function()
         {
$("#submit").hover
  (
    function()
     {
          $("#pp").css("color","#f00");
          $("#pp").css("background","#000808");
     }
       ,
     function()
    {
  
     $("#pp").css("color","#f00");
     $("#pp").css("background","#676767");
    
    }
  );
});




$(document).ready(function()
         {
$("#go").hover
  (
    function()
     {
         
          $("#tit").css("background","#000");
     }
       ,
     function()
    {
  
    
     $("#tit").css("background","#7e0163");
    
    }
  );
});
//________________






