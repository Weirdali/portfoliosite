<?php

$json = file_get_contents('php://input');
$obj = json_decode($json);

//var_dump($obj);

// print_r($obj);

// echo $obj->name;

$name = $obj->name;
$email = $obj->email;
$emailMsg = $obj->message;

// echo $name;

if ($name == "" || $email == "" || $emailMsg == "") {
    $msg["status"] = 1;
    $msg["statusMsg"] = "All fields required!";

} 
else {

    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {

        $msg["status"] = 1;
        $msg["statusMsg"] = "Please enter valid email!";

    } else {

        $emailMsg = filter_var($emailMsg, FILTER_SANITIZE_STRING);


        //$mail = "From: $name \n Email: $email \n Message: $message";
    //     //mail("contact@alicegee.com", "Testing", $mail);
        $msg["name"] = $name;
        $msg["email"] = $email;
        $msg["emailMsg"] = $emailMsg;
        $msg["status"] = 0;
        $msg["statusMsg"] = "Message sent!";

    }
}

echo json_encode($msg);
