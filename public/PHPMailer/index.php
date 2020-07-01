<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('Exception.php');
require('PHPMailer.php');
require('SMTP.php');

$data = json_decode($_POST['data']);

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = 'smtp';
$mail->Host = 'mail.smtp2go.com';
$mail->Port = '587'; // 8025, 2525 and 25 can also be used. Use Port 465 for SSL.
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = 'sel@smackagency.com';
$mail->Password = 'J4ckd4w!';

$mail->From = $data->emailAddress;
$mail->FromName = $data->firstName . ' ' . $data->lastName;
// $mail->AddAddress('tim.smith@goldrhino.com.au', 'Tim Smith');
// $mail->AddBcc('selvinkuik@gmail.com');
$mail->AddAddress('selvinkuik@gmail.com', 'Sel-Vin Kuik');

if (!empty($_FILES['businessPlan'])) {
    $mail->addAttachment($_FILES['businessPlan']['tmp_name'], $_FILES['businessPlan']['name']);
}

// $mail->isHTML(true);
// ob_start();
// require('foundation-emails/index-inline.php');
// $mail->Body = ob_get_contents();
// ob_end_clean();

$mail->Subject = 'Message from Gold Rhino website';
$mail->Body = "First name: {$data->firstName}\r\n
Last name: {$data->lastName}\r\n
Email address: {$data->emailAddress}\r\n
Job title: {$data->jobTitle}\r\n
Company name: {$data->companyName}\r\n
Trading name: {$data->tradingName}\r\n
City: {$data->city}\r\n
Country: {$data->country}\r\n
Year business was incorporated: {$data->yearBusinessWasIncorporated}\r\n
Stage of business: {$data->stageOfBusiness}\r\n
Number of shareholders: {$data->numberOfShareholders}\r\n
Percent owned by shareholders: {$data->percentOwnedByShareholders}\r\n
Debt: {$data->debt}\r\n
Debt source: {$data->debtSource}\r\n
Number of staff: {$data->numberOfStaff}\r\n
Industry (ANZSIC Division): {$data->industry}\r\n
Description of business: {$data->descriptionOfBusiness}\r\n
Competition: {$data->competition}\r\n
Elevator pitch: {$data->elevatorPitch}\r\n
Business plan: " . (empty($_FILES['businessPlan']) ? 'N/A' : 'Attached') . "\r\n
Funding sought: {$data->fundingSought}\r\n
Use of funding: {$data->useOfFunding}\r\n
Exit strategy: {$data->exitStrategy}\r\n
Potential acquiror: {$data->potentialAcquiror}\r\n
Estimated sale price: {$data->estimatedSalePrice}";

if(!$mail->Send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}