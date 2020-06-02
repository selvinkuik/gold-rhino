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
$mail->Body = "First name: {$data->firstName}
Last name: {$data->lastName}
Email address: {$data->emailAddress}
Job title: {$data->jobTitle}
Company name: {$data->companyName}
Trading name: {$data->tradingName}
City: {$data->city}
Country: {$data->country}
Year business was incorporated: {$data->yearBusinessWasIncorporated}
Stage of business: {$data->stageOfBusiness}
Number of shareholders: {$data->numberOfShareholders}
Percent owned by shareholders: {$data->percentOwnedByShareholders}
Debt: {$data->debt}
Debt source: {$data->debtSource}
Number of staff: {$data->numberOfStaff}
Industry: {$data->industry}
Description of business: {$data->descriptionOfBusiness}
Competition: {$data->competition}
Elevator pitch: {$data->elevatorPitch}
Business plan: " . (empty($_FILES['businessPlan']) ? 'N/A' : 'Attached') . "
Funding sought: {$data->fundingSought}
Use of funding: {$data->useOfFunding}
Exit strategy: {$data->exitStrategy}
Potential acquiror: {$data->potentialAcquiror}
Estimated sale price: {$data->estimatedSalePrice}";

if(!$mail->Send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}