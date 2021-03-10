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

    public function pedidos(){
        return $this-> hasOne(Pedido::class)->withTimeStamps();
    }

    public function user(){
        return $this->hasOne(Pedido::class)->withTimeStamps();
    }
}
