<?php

namespace Database\Factories;

use App\Models\Detalle;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetalleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Detalle::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => random_int(1, 5),
            'pedido_id' => random_int(1, 5),
            'producto_id' => random_int(2, 5),
        ];
    }
}
