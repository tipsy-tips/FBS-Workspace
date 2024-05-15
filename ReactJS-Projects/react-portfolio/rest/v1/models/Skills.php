<?php 

Class Skills {
    public $skills_aid;
    public $skills_list;
    public $skills_is_active;
    public $skills_datetime;
    public $skills_created;

    public $connection;
    public $lastInsertedId;
    public $tblSkills;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblSkills = "table_skills_list";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblSkills} ";
            $sql .= "( skills_list, ";
            $sql .= "skills_is_active, ";
            $sql .= "skills_datetime, ";
            $sql .= "skills_created ) values ( ";
            $sql .= ":skills_list, ";
            $sql .= ":skills_is_active, ";
            $sql .= ":skills_datetime, ";
            $sql .= ":skills_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_list" => $this->skills_list,
                "skills_is_active" => $this->skills_is_active,
                "skills_datetime" => $this->skills_datetime,
                "skills_created" => $this->skills_created,
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
            $sql .= "order by skills_aid asc ";
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
            $sql .= "where skills_aid = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_aid" => $this->skills_aid,
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
            $sql .= "skills_list = :skills_list, ";
            $sql .= "skills_datetime = :skills_datetime ";
            $sql .= "where skills_aid  = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_list" => $this->skills_list,
                "skills_datetime" => $this->skills_datetime,
                "skills_aid" => $this->skills_aid,
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
            $sql .= "skills_is_active = :skills_is_active, ";
            $sql .= "skills_datetime = :skills_datetime ";
            $sql .= "where skills_aid  = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_is_active" => $this->skills_is_active,
                "skills_datetime" => $this->skills_datetime,
                "skills_aid" => $this->skills_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}