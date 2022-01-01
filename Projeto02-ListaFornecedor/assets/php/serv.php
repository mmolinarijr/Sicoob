<?php 
include("assets/php//conn.php"); 
$sql = "INSERT INTO cadastro VALUES (null, '$_POST[nome]', '$_POST[telefone]')"; 
$query = mysql_query($sql); 
if ($query) header("Location: listforn.php"); 
else echo "Erro ao inserir registro. Provavelmente registro já cadastrado"; 
?> 