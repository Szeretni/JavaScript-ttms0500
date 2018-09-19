<?php
// server-jsonp.php 
$callback = "";
if  (isset($_GET['callback'])) {  
  $callback  =  filter_var($_GET['callback'],  FILTER_SANITIZE_STRING);  
} 

$json_string = '{"name":"Ari","age":49}';
echo  $callback  .  '('. json_encode($json_string) . ');';

?>