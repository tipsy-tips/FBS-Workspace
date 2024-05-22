<?php
$conn = null;
$conn = checkDbConnection();
$projects = new Projects($conn);
$error = [];
$returnData = [];
if (array_key_exists("projectsid", $_GET)) {
    checkPayload($data);
    $projects->projects_aid = $_GET['projectsid'];
    $projects->projects_image = checkIndex($data, "projects_image");
    $projects->projects_link = checkIndex($data, "projects_link");
    $projects->projects_datetime = date("Y-m-d H:i:s");
    
    checkId($projects->projects_aid);
    $query = checkUpdate($projects);
    returnSuccess($projects, "projects", $query);
}

checkEndpoint();