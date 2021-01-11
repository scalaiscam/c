<?php

$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$mail = $_POST["mail-1"];
$mail2 = $_POST["mail-2"];

$to = "scalais-design@hotmail.com";
$subject = "Concours";
$message = "Participation de".$nom." ".$prenom." ".$email."au concours";
$headers = "From: ". $email . "\r\n";
$headers .= "Reply-To: ". $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail($to,$subject,$message,$headers);

echo '<p class="text-black"> Votre participation au concours est enregistrée !</p>';


?>