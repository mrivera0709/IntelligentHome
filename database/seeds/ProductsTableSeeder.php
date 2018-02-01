<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'id' => 1,
            'subcategory_id' => 1,
            'product_name'  => 'Samsung Electronics UN65MU6300 65-Inch 4K Ultra HD Smart LED TV (2017 Model)',
            'product_brand' => 'Samsung',
            'price' => '$$$',
            'details' => "4X more pixels than Full HD means you're getting 4X the resolution, so you'll clearly see the difference. See vibrant and pure color for a realistic experience. Stand Size (WxHxD): 37.9 x 8.7 x 14.5 inches. OneRemote automatically detects and controls all your connected devices and content with no manual programming required. Smooth action on fast-moving content with Motion Rate 120. Please note the differences between the MU6300 and the MU630D. MU6300: Black cabinet, 450 nits HDR sustained brightness, Mega Dynamic Contrast MU630D: Dark Titan cabinet, 430 nits HDR sustained brightness, Ultra Dynamic Contrast",
            'finder_rating' => '8/10',
            'finder_review' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'asin' => 'B06XGXDDJZ',
            'image_url' => 'https://images-na.ssl-images-amazon.com/images/I/41wIpieKV5L.jpg',

        ]);
        DB::table('products')->insert([
            'id' => 2,
            'subcategory_id' => 3,
            'product_name'  => 'Roku Streaming Stick | Portable, power-packed player with voice remote with TV power and volume (2017)',
            'product_brand' => 'Roku',
            'price' => '$$',
            'details' => "Powerful. Portable. Enhanced voice remote. The Roku Streaming Stick gives you smooth streaming with channels that launch in a snap. Easily hide it behind your TV or move it around the house, you can even take it to a friend’s. No more juggling remotes, our new voice remote lets you easily control your TV with buttons for TV Power and volume. Use your voice to search across top channels by actor, show and more. Enjoy 500, 000 Plus blockbusters, award-winning original Series, kids’ shows, live network TV, and more-across thousands of free or paid channels like Netflix, Amazon video, HBO now, and PBS kids.",
            'finder_rating' => '9/10',
            'finder_review' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            'asin' => 'B075XN5L53',
            'image_url' => 'https://images-na.ssl-images-amazon.com/images/I/61-Ymfq8TPL._SL1500_.jpg',

        ]);
    }
}
