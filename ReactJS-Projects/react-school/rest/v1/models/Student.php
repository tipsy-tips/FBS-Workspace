<?php

Class Student {
    public $student_aid;
    public $student_name;
    public $student_age;
    public $student_class;
    public $student_is_active;
    public $student_datetime;
    public $student_created;

    public $connection;
    public $lastInsertedId;
    public $tblStudent;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblStudent = "react_school_student";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblStudent} ";
            $sql .= "( student_name, ";
            $sql .= "student_class, ";
            $sql .= "student_age, ";
            $sql .= "student_is_active, ";
            $sql .= "student_created, ";
            $sql .= "student_datetime ) values ( ";
            $sql .= ":student_name, ";
            $sql .= ":student_class, ";
            $sql .= ":student_age, ";
            $sql .= ":student_is_active, ";
            $sql .= ":student_created, ";
            $sql .= ":student_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => $this->student_name,
                "student_class" => $this->student_class,
                "student_age" => $this->student_age,
                "student_is_active" => $this->student_is_active,
                "student_created" => $this->student_created,
                "student_datetime" => $this->student_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
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

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblStudent} ";
            $sql .= "where student_aid = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_aid" => $this->student_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "student_name = :student_name, ";
            $sql .= "student_age = :student_age, ";
            $sql .= "student_class = :student_class, ";
            $sql .= "student_datetime = :student_datetime ";
            $sql .= "where student_aid  = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => $this->student_name,
                "student_age" => $this->student_age,
                "student_class" => $this->student_class,
                "student_datetime" => $this->student_datetime,
                "student_aid" => $this->student_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "student_is_active = :student_is_active, ";
            $sql .= "student_datetime = :student_datetime ";
            $sql .= "where student_aid  = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_is_active" => $this->student_is_active,
                "student_datetime" => $this->student_datetime,
                "student_aid" => $this->student_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}