<?php
	$now = new DateTime('now');
	$bd = new DateTime('@719141700');
	$years = $now->diff($bd)->y;
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
	<meta name="description" content="Kristaps Austers • <?=$years?> • Rīga • Motivēts">
	<link rel="openid2.provider" href="https://www.google.com/accounts/o8/ud">
	<link rel="openid2.local_id" href="https://profiles.google.com/kausters">
	<title>Kristaps Austers</title>
	<!-- @stylesheet style -->
</head>
<body>
	<header>
		<h1>Kristaps Austers</h1>
		<p><?=$years?> <span>&bull;</span> Rīga <span>&bull;</span> Motivēts <a href="/darbs" class="work">strādāt</a></p>
	</header>
</body>
</html>
