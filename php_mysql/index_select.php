<!-- index_select.php -->
require_once('mysql_connect.php');

$query = "SELECT * FROM `username`='jayosas'";

$result = mysqli_query($conn, $query);

if(!empty)