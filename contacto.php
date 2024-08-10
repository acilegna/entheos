 
<?php
  require_once "recaptchalib.php";
    $secret = "6LfnFCIUAAAAAPCY1PvGAfmVDgDKPV1BHO6e5mgi";
    $response = null;
    // comprueba la clave secreta
    $reCaptcha = new ReCaptcha($secret);
    //Correo para nosotros
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $para  = 'ladoobscurodelalunatv@hotmail.com' . ', '; 
    $para .= 'acilegna.airam88@gmail.com';
    $titulo = 'Solicitud de información sobre Entheos Multimedia';
    $header = 'From: contacto@entheosmultimedia.com' . "\r\n" .
        'Reply-To: '. $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";



    //Correo para el cliente
    $parac  = $email;
    $tituloc = 'Gracias por tu correo';
    $headerc = 'From: contacto@entheosmultimedia.com' . "\r\n" .
        'Reply-To: '. $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $msjCorreoc = strtoupper("Muchas gracias $nombre por tu interes en nuestro trabajo. \nEn breve uno de nuestros asesores se pondra en contacto contigo. \n\nEntheos multimedia\nentheosmultimedia.com");
//and ($response != null && $response->success) 
    if ($_POST["g-recaptcha-response"]!= null)  {
     mail($para, $titulo, $msjCorreo, $header);
              
     mail($parac, $tituloc, $msjCorreoc, $headerc);   
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias $nombre.');
            window.location.href = 'http://entheosmultimedia.com';
            </script>";
       
     
    }
 else {
             echo "<script language='javascript'>
            alert('Error!, intente de nuevo $nombre.');
            window.location.href = 'http://entheosmultimedia.com';
            </script>";
        }

 
  
?>
 