<?php

$name=$_POST[name];//aqui pega os dados que foram preenchidos la no formul�rio com o ID NOME
$email=$_POST[email];//aqui a mesma coisa, mas com o email
$telefone=$_POST[telefone];//aqui a mesma coisa, mas com o assunto
$message=$_POST[message];//aqui a mesma coisa, mas com o assunto

//agora vamos enviar todos esses dados usando a fun��o mail que � do PHP
mail("tetececilia@gmail.com","$telefone","
Name: $name
Email: $email
Telefone: $telefone
Message: $message","FROM:$name<$email>");

/*Ele diz assim pro c�digo: "Envia um email para meuemail@meudominio.com.br e que esse email tenha os dados que
foram pegos em ASSUNTO, NOME, EMAIL, ASSUNTO e MENSAGEM, eles foram pegos com o M�TODO POST e em FROM vai conter
os dados de quem enviou o email, ou seja, la na caixa de entrada do teu e-mail vai ter isso. :)*/

echo "sua mensagem foi enviada com sucesso!"; //a� mostramos no navegador da pessoa que enviou o email

?>
