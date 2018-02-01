<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'id' => 1,
            'category_name' => 'Entertainment',

        ]);
        DB::table('categories')->insert([
            'id' => 2,
            'category_name' => 'Lighting',

        ]);
        DB::table('categories')->insert([
            'id' => 3,
            'category_name' => 'Security',

        ]);
        DB::table('categories')->insert([
            'id' => 4,
            'category_name' => 'Energy',

        ]);
        DB::table('categories')->insert([
            'id' => 5,
            'category_name' => 'Hubs',

        ]);
        DB::table('categories')->insert([
            'id' => 6,
            'category_name' => 'Other',

        ]);
    }
}
