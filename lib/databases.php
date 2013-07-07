<?php
include (dirname(__FILE__)."/../config/database.php");

function connect_db() {
	$id_con = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	mysql_select_db(DB_NAME, $id_con);
	return $id_con;
}

function close_db() {
	mysql_close();
}