  <?php
  date_default_timezone_set('Etc/UTC');
require 'PHPMailerAutoload.php'; 
    // sending email confirmation
        $mail = new PHPMailer;
        $email=$_POST["email"];
        $name=$_POST["name"];
        $message=$_POST["content"];
   // $mail->SMTPDebug = 3;                               // Enable verbose debug output
        $mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
        $mail->Debugoutput = 'html';
        
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.live.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'slatkisislanisi@hotmail.com';                 // SMTP username
    $mail->Password = 'gocha2906';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $mail->setFrom('slatkisislanisi@hotmail.com', 'Admin');
  //Set an alternative reply-to address
    $mail->addReplyTo($email, 'Goca');
    $mail->addAddress('grbonosic@gmail.com', 'Goca');     // Add a recipient


    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Goca';
    $mail->Body    = "<b><p>Poruka od: $name</p><p>$email</p><p>$message</p></b>";
    $mail->AltBody = $message;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
    ?>