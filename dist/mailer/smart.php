<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$tel = $_POST['tel'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'timurweb05@gmail.com';                 // Наш логин
$mail->Password = 'dcrymhviuoipukcu';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('timurweb05@gmail.com', 'Заявка с Aurora05.ru');   // От кого письмо 
$mail->addAddress('nurik-85@bk.ru');     // Add a recipient
// nurik-85@bk.ru
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Телефон(Whatsapp): ' . $tel . '<br>
	Текст: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>