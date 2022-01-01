<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <title>Document</title>
</head>
<body>
<table id="tabela"> 
        <tr> 
         <th>ID</th> 
         <th>Empresa</th> 
         <th>Nome</th> 
         <th>CPF/CNPJ</th> 
         <th>Telefone</th> 
         <th>Data-Registro</th> 
        </tr> 

        <?php 
            include("assets/php/conn.php"); 
            $sql="select * from 'Cadastro';"; 
            $query = mysql_query($sql); 
            while ($linha = mysql_fetch_array($query)) { 
                    echo "<tr>"; 
                    echo "<td>$linha[id]</td>"; 
                    echo "<td>$linha[empresa]</td>"; 
                    echo "<td>$linha[nome]</td>"; 
                    echo "<td>$linha[cpfcnpj]</td>"; 
                    echo "<td>$linha[telefone]</td>"; 
                    echo "<td>$linha[datahora]</td>"; 
                    echo "<td style='text-align:center'>"; 
                    echo "</td>"; 
                    echo "<td style='text-align:center'>"; 
                    echo "</td>"; 
                    echo "</tr>\n"; 
                } 
        ?> 
        </table> 
</body>
</html>