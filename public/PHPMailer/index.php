<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("Exception.php");
require("PHPMailer.php");
require("SMTP.php");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";
$mail->Host = "mail.smtp2go.com";
$mail->Port = "2525"; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "sel@smackagency.com";
$mail->Password = "J4ckd4w!";

$mail->From = "website@goldrhino.com.au";
$mail->FromName = "Gold Rhino Website";
$mail->AddAddress("selvinkuik@gmail.com", "Sel-Vin Kuik");

$mail->isHTML(true);
$mail->Subject = "New Message";

$mail->addAttachment($_FILES['businessPlan']['tmp_name'], $_FILES['businessPlan']['name']);

ob_start();
require("foundation-emails/index-inline.php");
$mail->Body = ob_get_contents();
ob_end_clean();

if(!$mail->Send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}