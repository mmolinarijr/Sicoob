<?php 
$host = "localhost"; 
$user = "root"; 
$pass = ""; 
$bank = "Sicoob"; 
$serv = mysql_connect($host, $user, $pass) or die("Impossível conectar-se ao servidor ".$host); 
$link = mysql_select_db($bank) or die ("Impossível conectar-se ao banco ".$bank); 
?> 


