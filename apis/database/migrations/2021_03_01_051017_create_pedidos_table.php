<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->string('orden');
            $table->integer('total');
            $table->timestamps();
            $table->unsignedBigInteger('detalle_id');
            $table->unsignedBigInteger('user_id');
             //Relación de la tabla detalle
             $table->foreign('detalle_id')->references('id')->on('detalles')->onDelete('cascade')->onUpdate('cascade');
               //Relación de la tabla users
            $table->foreign('user_id')->references('id')->on('users'); //->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}

