<?php header('Content-type: text/html; charset=utf-8'); ?>
<!DOCTYPE html>
<html>
  <head>
	<meta name="content-type" http-equiv="content-type" value="text/html; utf-8"/>
	<link rel="stylesheet" type="text/css" href="<?php echo str_replace(basename(__FILE__), 'md-styles.css', $_SERVER['SCRIPT_NAME']); ?>">
	<?php echo "<title>", basename(realpath($_SERVER['PATH_TRANSLATED'])), "</title>"; ?>
	
	<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="<?= dirname($_SERVER['SCRIPT_NAME']) ?>/markdown.js"></script>
  </head>
  <body>
<?php

require('markdown.php');
require('smartypants.php');

$legalExtensions = array('md', 'markdown', 'mdown');

$file = realpath($_SERVER['PATH_TRANSLATED']);
if($file &&
   in_array(strtolower(substr($file, strrpos($file, '.') + 1)),
	    $legalExtensions)) {
  echo SmartyPants(Markdown(file_get_contents($file)));
}
else {
  echo "<p>Bad filename given</p>";
}
?>
  </body>
</html>
