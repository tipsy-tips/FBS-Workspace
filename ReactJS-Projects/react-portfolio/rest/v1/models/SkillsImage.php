<?php 

Class SkillsImage {
    public $skillsimage_aid;
    public $skillsimage_image;
    public $skillsimage_is_active;
    public $skillsimage_datetime;
    public $skillsimage_created;

    public $connection;
    public $lastInsertedId;
    public $tblSkills;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblSkills = "table_skills_image";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblSkills} ";
            $sql .= "( skillsimage_image, ";
            $sql .= "skillsimage_is_active, ";
            $sql .= "skillsimage_datetime, ";
            $sql .= "skillsimage_created ) values ( ";
            $sql .= ":skillsimage_image, ";
            $sql .= ":skillsimage_is_active, ";
            $sql .= ":skillsimage_datetime, ";
            $sql .= ":skillsimage_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skillsimage_image" => $this->skillsimage_image,
                "skillsimage_is_active" => $this->skillsimage_is_active,
                "skillsimage_datetime" => $this->skillsimage_datetime,
                "skillsimage_created" => $this->skillsimage_created,
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
            $sql .= "from {$this->tblSkills} ";
            $sql .= "order by skillsimage_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSkills} ";
            $sql .= "where skillsimage_aid = :skillsimage_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skillsimage_aid" => $this->skillsimage_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skillsimage_image = :skillsimage_image, ";
            $sql .= "skillsimage_datetime = :skillsimage_datetime ";
            $sql .= "where skillsimage_aid  = :skillsimage_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skillsimage_image" => $this->skillsimage_image,
                "skillsimage_datetime" => $this->skillsimage_datetime,
                "skillsimage_aid" => $this->skillsimage_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skillsimage_is_active = :skillsimage_is_active, ";
            $sql .= "skillsimage_datetime = :skillsimage_datetime ";
            $sql .= "where skillsimage_aid  = :skillsimage_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skillsimage_is_active" => $this->skillsimage_is_active,
                "skillsimage_datetime" => $this->skillsimage_datetime,
                "skillsimage_aid" => $this->skillsimage_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}