<?php

use Illuminate\Database\Seeder;

class SubcategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subcategories')->insert([
            'id' => 1,
            'subcategory_name' => 'TVs',
            'category_id' => 1,
        ]);
        DB::table('subcategories')->insert([
            'id' => 2,
            'subcategory_name' => 'Speakers',
            'category_id' => 1,
        ]);
        DB::table('subcategories')->insert([
            'id' => 3,
            'subcategory_name' => 'Wifi Display Dongles',
            'category_id' => 1,
        ]);
        DB::table('subcategories')->insert([
            'id' => 4,
            'subcategory_name' => 'Common Bulbs',
            'category_id' => 2,
        ]);
        DB::table('subcategories')->insert([
            'id' => 5,
            'subcategory_name' => 'Switches',
            'category_id' => 2,
        ]);
        DB::table('subcategories')->insert([
            'id' => 6,
            'subcategory_name' => 'Sockets',
            'category_id' => 2,
        ]);
        DB::table('subcategories')->insert([
            'id' => 7,
            'subcategory_name' => 'Other Bulbs',
            'category_id' => 2,
        ]);
        DB::table('subcategories')->insert([
            'id' => 8,
            'subcategory_name' => 'Door Locks',
            'category_id' => 3,
        ]);
        DB::table('subcategories')->insert([
            'id' => 9,
            'subcategory_name' => 'Camera Systems',
            'category_id' => 3,
        ]);
        DB::table('subcategories')->insert([
            'id' => 10,
            'subcategory_name' => 'Security Systems',
            'category_id' => 3,
        ]);
        DB::table('subcategories')->insert([
            'id' => 11,
            'subcategory_name' => 'Sensors',
            'category_id' => 3,
        ]);
        DB::table('subcategories')->insert([
            'id' => 12,
            'subcategory_name' => 'Thermostats',
            'category_id' => 4,
        ]);
        DB::table('subcategories')->insert([
            'id' => 13,
            'subcategory_name' => 'Water Valves and Leak Sensors',
            'category_id' => 4,
        ]);
        DB::table('subcategories')->insert([
            'id' => 14,
            'subcategory_name' => 'Air Vents',
            'category_id' => 4,
        ]);
        DB::table('subcategories')->insert([
            'id' => 15,
            'subcategory_name' => 'Tech Brands',
            'category_id' => 5,
        ]);
        DB::table('subcategories')->insert([
            'id' => 16,
            'subcategory_name' => 'Lighting Hubs',
            'category_id' => 5,
        ]);
        DB::table('subcategories')->insert([
            'id' => 17,
            'subcategory_name' => 'Other',
            'category_id' => 5,
        ]);
    }
}
