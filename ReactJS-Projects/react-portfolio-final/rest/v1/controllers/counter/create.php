<?php
$conn = null;
$conn = checkDbConnection();
$counter = new Counter($conn);
if (array_key_exists("counterid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$counter->counter_number = checkIndex($data, "counter_number");
$counter->counter_title = checkIndex($data, "counter_title");
$counter->counter_is_active = 1;
$counter->counter_created = date("Y-m-d H:i:s");
$counter->counter_datetime = date("Y-m-d H:i:s");

// isNameExist($counter, $counter->counter_name);

$query = checkCreate($counter);
returnSuccess($counter, "counter", $query);