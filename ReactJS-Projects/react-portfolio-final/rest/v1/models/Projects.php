<?php 

Class Projects {
    public $projects_aid;
    public $projects_image;
    public $projects_link;
    public $projects_is_active;
    public $projects_datetime;
    public $projects_created;

    public $connection;
    public $lastInsertedId;
    public $tblProjects;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblProjects = "table_projects";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblProjects} ";
            $sql .= "( projects_image, ";
            $sql .= "projects_link, ";
            $sql .= "projects_is_active, ";
            $sql .= "projects_datetime, ";
            $sql .= "projects_created ) values ( ";
            $sql .= ":projects_image, ";
            $sql .= ":projects_is_active, ";
            $sql .= ":projects_datetime, ";
            $sql .= ":projects_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "projects_image" => $this->projects_image,
                "projects_link" => $this->projects_link,
                "projects_is_active" => $this->projects_is_active,
                "projects_datetime" => $this->projects_datetime,
                "projects_created" => $this->projects_created,
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
            $sql .= "from {$this->tblProjects} ";
            $sql .= "order by projects_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblProjects} ";
            $sql .= "where projects_aid = :projects_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "projects_aid" => $this->projects_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblProjects} set ";
            $sql .= "projects_image = :projects_image, ";
            $sql .= "projects_link = :projects_link, ";
            $sql .= "projects_datetime = :projects_datetime ";
            $sql .= "where projects_aid  = :projects_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "projects_image" => $this->projects_image,
                "projects_link" => $this->projects_link,
                "projects_datetime" => $this->projects_datetime,
                "projects_aid" => $this->projects_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblProjects} set ";
            $sql .= "projects_is_active = :projects_is_active, ";
            $sql .= "projects_datetime = :projects_datetime ";
            $sql .= "where projects_aid  = :projects_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "projects_is_active" => $this->projects_is_active,
                "projects_datetime" => $this->projects_datetime,
                "projects_aid" => $this->projects_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}