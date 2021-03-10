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
            'status'=>$this->faker->word, 
            'cantidad'=>$this->faker->randomDigit, 
            'producto_id' => random_int(2, 5),
            'user_id' => random_int(2, 5),
        ];
    }
}
