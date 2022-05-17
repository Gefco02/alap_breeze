<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class teszt extends Model
{
    use HasFactory;
    public function kategoria() {
        return $this->hasOne(kategorias::class, 'id', 'kategoria');
    }
}
