<?php

Class Student {
    public
    $student_aid, 
    $student_name, 
    $student_age, 
    $student_class, 
    $student_is_active, 
    $student_datetime, 
    $student_created;

    public $connection, $tblStudent;

    public function __construct($db)
     { $this->connection = $db;
        $this->tblStudent = "react_school_student";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblStudent}";
            $sql .= "( student_name, ";
            $sql .= "student_class,";
            $sql .= "student_age,";
            $sql .= "student_is_active,";
            $sql .= "student_created,";
            $sql .= "student_datetime ) values (";

            $sql .= ":student_name,";
            $sql .= ":student_class,";
            $sql .= ":student_age,";
            $sql .= ":student_is_active,";
            $sql .= ":student_created,";
            $sql .= ":student_datetime";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => $this->student_name,
                "student_class" => $this->student_class,
                "student_age" => $this->student_age,
                "student_is_active" => $this->student_is_active,
                "student_created" => $this->student_created,
                "student_datetime" => $this->student_datetime,
            ]);

        } catch(PDOException $ex) {
            $query = false;
        } 
        
        return $query;
    }
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudent} ";
            $sql .= "order by student_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


}