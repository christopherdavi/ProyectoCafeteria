<?php

namespace Database\Factories;

use App\Models\Producto;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Producto::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'nombre'=>$this->faker->sentence,
            'detalle'=>$this->faker->sentence,
            'precio'=>$this->faker->numberBetween($min = 5, $max = 1000),
            'categoria_id'=>$this->faker->numberBetween($min = 1, $max = 5)
        ];
    }
}
