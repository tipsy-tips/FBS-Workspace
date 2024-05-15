<?php
$conn = null;
$conn = checkDbConnection();
$skillsimage = new SkillsImage($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($skillsimage);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();