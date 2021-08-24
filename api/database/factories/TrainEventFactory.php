<?php

namespace Database\Factories;

use App\Models\TrainEvent;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrainEventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TrainEvent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'date' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '+5 year'),
            //
        ];
    }
}
