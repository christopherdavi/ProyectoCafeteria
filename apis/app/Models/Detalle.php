<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detalle extends Model
{
    use HasFactory;

    public function productos(){
        return $this-> belongsToMany(Producto::class)->withTimeStamps();
    }
    public function users(){
        return $this-> hasMany(User::class)->withTimeStamps();
    }
    public function pedidos(){
        return $this-> belongsToMany(Pedido::class)->withTimeStamps();
    }
}
