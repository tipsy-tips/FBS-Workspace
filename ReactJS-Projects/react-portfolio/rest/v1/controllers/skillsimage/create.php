<?php
$conn = null;
$conn = checkDbConnection();
$skillsimage = new SkillsImage($conn);
if (array_key_exists("skillsimageid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$skillsimage->skillsimage_image = checkIndex($data, "skillsimage_image");
$skillsimage->skillsimage_is_active = 1;
$skillsimage->skillsimage_created = date("Y-m-d H:i:s");
$skillsimage->skillsimage_datetime = date("Y-m-d H:i:s");

// isNameExist($skillsimage, $skillsimage->skillsimage_name);

$query = checkCreate($skillsimage);
returnSuccess($skillsimage, "skillsimage", $query);