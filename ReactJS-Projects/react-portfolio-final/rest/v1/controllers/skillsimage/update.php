<?php
$conn = null;
$conn = checkDbConnection();
$skillsimage = new SkillsImage($conn);
$error = [];
$returnData = [];
if (array_key_exists("skillsimageid", $_GET)) {
    checkPayload($data);
    $skillsimage->skillsimage_aid = $_GET['skillsimageid'];
    $skillsimage->skillsimage_image = checkIndex($data, "skillsimage_image");
    $skillsimage->skillsimage_datetime = date("Y-m-d H:i:s");
    
    checkId($skillsimage->skillsimage_aid);
    $query = checkUpdate($skillsimage);
    returnSuccess($skillsimage, "skillsimage", $query);
}

checkEndpoint();