<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<!-- CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen"> 
		<link rel="stylesheet" type="text/css" href="css/multilevelmenu.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />
		<link rel="stylesheet" type="text/css" href="css/animations.css" />
		<link href="css/main.css" rel="stylesheet" media="screen">
		
		<!-- JS -->
		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/main.js"></script>
	</head>
	<body>
		<img src="img/fondo_2.jpg" class="background" />
		<div class="menuSuperior">
			<div class="left">
				<a class="btn_menu" id="OpenMenu"><img src="img/ico-menu.png" class="btMenu"  /></a>
				<img src="img/bt-siguiente-der.png" class="tituloSupervisor"  />
				<p id="pageTitle"></p>
			</div>
			<img src="img/ico-logo-donPepe.png" class="btLogoMarca"  />
			<div id="PanelMenu" class="menu" style=" margin-left:-258px; display:none;">
				<!-- cerrar menu -->
				<a class="close_menu" id="CloseMenu"></a>
				<!-- ir a la pantalla principal -->
				<a class="btn_home" id="go_home" href="#"><i></i>Inicio</a>
				<!-- menu -->
				<ul>
					<li><a id="Seccion01" href="informacion-de-pyg.html">Información de P&G </a></li>
					<li><a id="Seccion02" href="mapa-por-distribuidor.html">Mapa por Distribuidor</a></li>
					<li class="twolines"><a id="Seccion03" href="interaccion-distribuidor-changarro.html">Interacción P&G / Distribuidor / Changarro</a></li>
					<li><a id="Seccion04" href="informacion-del-canal.html">Información del Canal</a></li>
					<li><a id="Seccion05" href="objetivos.html">Objetivo</a></li>
				</ul>
			</div>
			<!--Menu Background-->
			<div id="Overlay" class="overlay" style="display:none;"></div>
		</div>
		<div id="pt-main" class="pt-perspective">