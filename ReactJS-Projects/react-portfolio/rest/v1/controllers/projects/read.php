<?php
$conn = null;
$conn = checkDbConnection();
$portfolio = new Projects($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($portfolio);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();