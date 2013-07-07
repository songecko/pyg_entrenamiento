<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Cargamos las librerias
require('lib/includes.php');

//DB Connection
//connect_db();

function get_include_contents($filename) {
    if (is_file($filename)) {
        ob_start();
        include $filename;
        $contents = ob_get_contents();
        ob_end_clean();
        return $contents;
    }
    return "<p>Error</p>";
}

//Include the pages
$pagesQuantity = 72;

$content = '';
for($page = 1; $page <= $pagesQuantity; $page++)
{
	if (is_file('pages/'.$page.".php"))
	{
		$content .= "<!-- PAGE ".$page." -->\n";
		$content .= get_include_contents("pages/".$page.".php");
	}
}

//Render!
include("templates/header.php");
echo $content;
include("templates/footer.php");

//close_db();