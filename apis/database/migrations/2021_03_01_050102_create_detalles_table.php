<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetallesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalles', function (Blueprint $table) {
            $table->id(); 
            $table->string('status');
            $table->integer('cantidad');
            $table->timestamps();
            $table->unsignedBigInteger('producto_id');
            $table->unsignedBigInteger('user_id');
             //Relación de la tabla users
             $table->foreign('user_id')->references('id')->on('users'); 
            //Relación de la tabla productos
            $table->foreign('producto_id')->references('id')->on('productos')->onDelete('cascade')->onUpdate('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalles');
    }
}
