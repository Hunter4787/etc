<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $room;

    /**
     * @ORM\Column(type="integer")
     */
    private $adults;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $childs;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoom(): ?int
    {
        return $this->roomNumber;
    }

    public function setRoom(int $room): self
    {
        $this->room = $room;

        return $this;
    }

    public function getAdults(): ?int
    {
        return $this->adults;
    }

    public function setAdults(int $adults): self
    {
        $this->adults = $adults;

        return $this;
    }

    public function getChilds(): ?int
    {
        return $this->childs;
    }

    public function setChilds(?int $childs): self
    {
        $this->childs = $childs;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'room' => $this->room, 'adults' => $this->adults, 'childs' => $this->childs];
    }
}
