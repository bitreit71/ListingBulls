<?php
    $myemail = '#';//<-----Put Your email address here.
    if(empty($_POST['email']) ||
       empty($_POST['project']))
    {
        $errors .= "\n Error: all fields are required";
    }
    $project = $_POST['project'];
    $email_address = $_POST['email'];

    $to = $myemail;
    $email_subject = "New contact";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Email/Telegram: $email \n ".
    "Project name \n $project";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    header('Location:index.html?showSubmitPopup=true');
    ?>