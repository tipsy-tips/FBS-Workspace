<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Teacher.php';

$conn = null;
$conn = checkDbConnection();

$teacher = new Teacher($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("teacherid", $_GET)) {

        checkPayload($data);
        $teacher->teacher_aid = $_GET['teacherid'];
        $teacher->teacher_name = checkIndex($data, "teacher_name");
        $teacher->teacher_age = checkIndex($data, "teacher_age");
        $teacher->teacher_class = checkIndex($data, "teacher_class");
        $teacher->teacher_gender = checkIndex($data, "teacher_gender");
        $teacher->teacher_email = checkIndex($data, "teacher_email");
        $teacher->teacher_is_active = 1;
        $teacher->teacher_created = date("Y-m-d H:i:s");
        $teacher->teacher_datetime = date("Y-m-d H:i:s");
        checkId($teacher->teacher_aid);
        $query = checkActive($teacher);
        http_response_code(200);
        returnSuccess($teacher, "teacher", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();