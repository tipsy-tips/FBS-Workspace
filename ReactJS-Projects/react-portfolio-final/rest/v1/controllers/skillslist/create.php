<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
if (array_key_exists("skillsid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$skills->skills_list = checkIndex($data, "skills_list");
$skills->skills_is_active = 1;
$skills->skills_created = date("Y-m-d H:i:s");
$skills->skills_datetime = date("Y-m-d H:i:s");

// isNameExist($skills, $skills->skills_name);

$query = checkCreate($skills);
returnSuccess($skills, "skills", $query);