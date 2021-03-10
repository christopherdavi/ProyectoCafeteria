<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory(5)->create();
        \App\Models\Categoria::factory(5)->create();
        \App\Models\Producto::factory(5)->create();
        \App\Models\Detalle::factory(5)->create();
        \App\Models\Perfil::factory(5)->create();
        \App\Models\Pedido::factory(5)->create();
        
    }
}
