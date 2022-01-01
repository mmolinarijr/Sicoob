<?php 
include("assets/php/conn.php"); 
$sql = "INSERT INTO Cadastro VALUES (null, '$_POST[empresa]', '$_POST[nome]', '$_POST[cpfcnpj]', '$_POST[telefone]', ;$_POST[datahora]')"; 
$query = mysql_query($sql); 
if ($query) header("Location: listforn.php"); 
else echo "Erro ao inserir registro. Provavelmente registro já cadastrado"; 
?> 