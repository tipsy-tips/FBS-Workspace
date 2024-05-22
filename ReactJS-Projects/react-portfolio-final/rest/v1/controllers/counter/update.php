<?php
$conn = null;
$conn = checkDbConnection();
$counter = new Counter($conn);
$error = [];
$returnData = [];
if (array_key_exists("counterid", $_GET)) {
    checkPayload($data);
    $counter->counter_aid = $_GET['counterid'];
    $counter->counter_number = checkIndex($data, "counter_number");
    $counter->counter_title = checkIndex($data, "counter_title");
    $counter->counter_datetime = date("Y-m-d H:i:s");
    
    checkId($counter->counter_aid);
    $query = checkUpdate($counter);
    returnSuccess($counter, "counter", $query);
}

checkEndpoint();