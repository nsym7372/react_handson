<?php

namespace Database\Seeders;

use App\Models\TrainEvent;
use Illuminate\Database\Seeder;

class TrainEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        TrainEvent::factory(15)->create();
    }
}
