<?php

namespace Database\Factories;

use App\Models\Perfil;
use Illuminate\Database\Eloquent\Factories\Factory;

class PerfilFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Perfil::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cedula'=>$this->faker->numberBetween($min = 1000000000, $max = 9000000000),
            'direccion'=>$this->faker->address,
            'telefono'=>$this->faker->e164PhoneNumber,
            'rol'   =>$this->faker->jobTitle,
            'user_id' => random_int(1, 5),
        ];
    }
}
