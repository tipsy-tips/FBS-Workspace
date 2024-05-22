<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/SkillsImage.php';

$conn = null;
$conn = checkDbConnection();

$skillsimage = new SkillsImage($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("skillsimageid", $_GET)) {

        checkPayload($data);
        $skillsimage->skillsimage_aid = $_GET['skillsimageid'];
        $skillsimage->skillsimage_is_active = trim($data["isActive"]);
        $skillsimage->skillsimage_datetime = date("Y-m-d H:i:s");
        checkId($skillsimage->skillsimage_aid);
        $query = checkActive($skillsimage);
        http_response_code(200);
        returnSuccess($skillsimage, "skillsimage", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();