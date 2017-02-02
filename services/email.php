<?php
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
// If you are using Composer (recommended)
require 'vendor/autoload.php';
// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");

$email = $_POST["email"];
$name = $_POST["name"];
$message = $_POST["message"];

if (!$email || !$name || !$message) {
	return;
}

$from = new SendGrid\Email($name, $email);
$subject = "Let's rock and roll!";
$to = new SendGrid\Email("etéreo", "hello@etereo.io");
$content = new SendGrid\Content("text/plain", $message);
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);
$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();
