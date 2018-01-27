<?php

use Illuminate\Database\Seeder;

class CategorysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorys')->insert([
            'category_id' => 1,
            'category_name' => 'Entertainment',
            'ranking' => 1
        ]);
        DB::table('categorys')->insert([
            'category_id' => 2,
            'category_name' => 'Lighting',
            'ranking' => 2
        ]);
        DB::table('categorys')->insert([
            'category_id' => 3,
            'category_name' => 'Security',
            'ranking' => 3
        ]);
        DB::table('categorys')->insert([
            'category_id' => 4,
            'category_name' => 'Energy',
            'ranking' => 4
        ]);
        DB::table('categorys')->insert([
            'category_id' => 5,
            'category_name' => 'Hubs',
            'ranking' => 5
        ]);
        DB::table('categorys')->insert([
            'category_id' => 6,
            'category_name' => 'Other',
            'ranking' => 6
        ]);
    }
}
