<?php
$conn = null;
$conn = checkDbConnection();
$counter = new Counter($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($counter);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();