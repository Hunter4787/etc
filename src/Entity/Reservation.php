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
    private $roomNumber;

    /**
     * @ORM\Column(type="integer")
     */
    private $adulsCount;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $childsCount;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoomNumber(): ?int
    {
        return $this->roomNumber;
    }

    public function setRoomNumber(int $roomNumber): self
    {
        $this->roomNumber = $roomNumber;

        return $this;
    }

    public function getAdulsCount(): ?int
    {
        return $this->adulsCount;
    }

    public function setAdulsCount(int $adulsCount): self
    {
        $this->adulsCount = $adulsCount;

        return $this;
    }

    public function getChildsCount(): ?int
    {
        return $this->childsCount;
    }

    public function setChildsCount(?int $childsCount): self
    {
        $this->childsCount = $childsCount;

        return $this;
    }
}
