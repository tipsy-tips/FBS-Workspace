<?php 

Class Counter {
    public $counter_aid;
    public $counter_number;
    public $counter_title;
    public $counter_is_active;
    public $counter_datetime;
    public $counter_created;

    public $connection;
    public $lastInsertedId;
    public $tblCounter;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblCounter = "table_counter";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblCounter} ";
            $sql .= "( counter_number, ";
            $sql .= "counter_title, ";
            $sql .= "counter_is_active, ";
            $sql .= "counter_datetime, ";
            $sql .= "counter_created ) values ( ";
            $sql .= ":counter_number, ";
            $sql .= ":counter_title, ";
            $sql .= ":counter_is_active, ";
            $sql .= ":counter_datetime, ";
            $sql .= ":counter_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "counter_number" => $this->counter_number,
                "counter_title" => $this->counter_title,
                "counter_is_active" => $this->counter_is_active,
                "counter_datetime" => $this->counter_datetime,
                "counter_created" => $this->counter_created,
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
            $sql .= "from {$this->tblCounter} ";
            $sql .= "order by counter_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblCounter} ";
            $sql .= "where counter_aid = :counter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "counter_aid" => $this->counter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblCounter} set ";
            $sql .= "counter_number = :counter_number, ";
            $sql .= "counter_title = :counter_title, ";
            $sql .= "counter_datetime = :counter_datetime ";
            $sql .= "where counter_aid  = :counter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "counter_number" => $this->counter_number,
                "counter_title" => $this->counter_title,
                "counter_datetime" => $this->counter_datetime,
                "counter_aid" => $this->counter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblCounter} set ";
            $sql .= "counter_is_active = :counter_is_active, ";
            $sql .= "counter_datetime = :counter_datetime ";
            $sql .= "where counter_aid  = :counter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "counter_is_active" => $this->counter_is_active,
                "counter_datetime" => $this->counter_datetime,
                "counter_aid" => $this->counter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}