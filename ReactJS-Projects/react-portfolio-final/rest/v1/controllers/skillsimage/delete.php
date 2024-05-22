<?php
$conn = null;
$conn = checkDbConnection();
$skillsimage = new SkillsImage($conn);

$error = [];
$returnData = [];
if (array_key_exists("skillsimageid", $_GET)) {
    $skillsimage->skillsimage_aid = $_GET['skillsimageid'];
    checkId($skillsimage->skillsimage_aid);

    $query = checkDelete($skillsimage);
    returnSuccess($skillsimage, "skillsimage", $query);
}

checkEndpoint();