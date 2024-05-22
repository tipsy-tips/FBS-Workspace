<?php
$conn = null;
$conn = checkDbConnection();
$projects = new Projects($conn);
if (array_key_exists("projectsid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$projects->projects_image = checkIndex($data, "projects_image");
$projects->projects_link = checkIndex($data, "projects_link");
$projects->projects_is_active = 1;
$projects->projects_created = date("Y-m-d H:i:s");
$projects->projects_datetime = date("Y-m-d H:i:s");

// isNameExist($projects, $projects->projects_name);

$query = checkCreate($projects);
returnSuccess($projects, "projects", $query);