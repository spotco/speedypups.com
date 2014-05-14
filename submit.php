<?php
if (!isset($_REQUEST["email"])) {
    die("invalid param");
}
$email = $_REQUEST["email"];
if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
    die("not an email");
}
$f = fopen("submit.txt","a");
fwrite($f,$email."\n");
fclose($f);
echo "Signed up!";
?>