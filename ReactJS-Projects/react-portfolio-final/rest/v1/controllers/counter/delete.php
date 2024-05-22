<?php
$conn = null;
$conn = checkDbConnection();
$counter = new Counter($conn);

$error = [];
$returnData = [];
if (array_key_exists("counterid", $_GET)) {
    $counter->counter_aid = $_GET['counterid'];
    checkId($counter->counter_aid);

    $query = checkDelete($counter);
    returnSuccess($counter, "counter", $query);
}

checkEndpoint();