<?php
$connection = mysql_connect("localhost", "root", ""); 
$db = mysql_select_db("testarticle'", $connection); 

$usr=$_POST['usr1'];
$image=$_POST['image1'];



echo "
$_POST['usr1'];
$_POST['image1'];
";


$query = mysql_query("INSERT INTO article_save(usr, image) values ('$usr','$image' )");

mysql_close($connection);
?>