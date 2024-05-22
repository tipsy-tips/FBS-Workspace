<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Counter.php';

$conn = null;
$conn = checkDbConnection();

$counter = new Counter($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("counterid", $_GET)) {

        checkPayload($data);
        $counter->counter_aid = $_GET['counterid'];
        $counter->counter_is_active = trim($data["isActive"]);
        $counter->counter_datetime = date("Y-m-d H:i:s");
        checkId($counter->counter_aid);
        $query = checkActive($counter);
        http_response_code(200);
        returnSuccess($counter, "counter", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();