<?php 
mysql_connect("localhost","root","userlogin") or die(mysql_error());
//or die(mysql_error())     لمعرفت هل هناك خطاء ام لا 
mysql_select_db("person") or die(mysql_error());

//  نجلب البيانات من الفورم
$name = $_POST["name1"];
$email = $_POST["email1"];
$phon = $_POST["phon1"];
$tec = $_POST["mesg"];




// بعد سحب البيانات نسوي كويري استعلام 
    $query = mysql_query("insert into  names (name,email1,phon1,mesg) values('$name','$email ', '$phon ' ,' $tec' ) ") or die(mysql_error());

?>