<?php

use Illuminate\Database\Seeder;

class SubcategorysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subcategorys')->insert([
            'subcategory_id' => 1,
            'subcategory_name' => 'TVs',
            'category_id' => 1,
        ]);
        DB::table('subcategorys')->insert([
            'subcategory_id' => 2,
            'subcategory_name' => 'Speakers',
            'category_id' => 1,
        ]);
        DB::table('subcategorys')->insert([
            'subcategory_id' => 3,
            'subcategory_name' => 'Wifi Display Dongles',
            'category_id' => 1,
        ]);
        DB::table('subcategorys')->insert([
            'subcategory_id' => 4,
            'subcategory_name' => 'Common Bulbs',
            'category_id' => 2,
        ]);
        DB::table('subcategorys')->insert([
            'subcategory_id' => 5,
            'subcategory_name' => 'Switches',
            'category_id' => 2,
        ]);
        DB::table('subcategorys')->insert([
            'subcategory_id' => 6,
            'subcategory_name' => 'Sockets',
            'category_id' => 3,
        ]);
    }
}
