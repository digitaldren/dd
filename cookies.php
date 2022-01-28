$f1 = $_GET['f1'] ?? '';
$f2 = $_GET['f2'] ?? '';
$f3 = $_GET['f3'] ?? '';
$f4 = $_GET['f4'] ?? '';

 if(!empty($f1)){
setcookie("field1", $f1, time()+3600, "/","", 0); 
}
 if(!empty($f2)){
setcookie("field2", $f2, time()+3600, "/", "", 0);
}
 if(!empty($f3)){
setcookie("field3", $f3, time()+3600, "/", "", 0); 
}
 if(!empty($f4)){
setcookie("field4", $f4, time()+3600, "/", "", 0); 
} 
