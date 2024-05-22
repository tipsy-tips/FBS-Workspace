<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
$error = [];
$returnData = [];
if (array_key_exists("skillsid", $_GET)) {
    checkPayload($data);
    $skills->skills_aid = $_GET['skillsid'];
    $skills->skills_list = checkIndex($data, "skills_list");
    $skills->skills_datetime = date("Y-m-d H:i:s");
    
    checkId($skills->skills_aid);
    $query = checkUpdate($skills);
    returnSuccess($skills, "skills", $query);
}

checkEndpoint();