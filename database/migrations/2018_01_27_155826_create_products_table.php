<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('category_id');
            $table->integer('subcategory_id');
            $table->string('product_name');
            $table->string('product_brand');
            $table->string('price');
            $table->string('finder_rating');
            $table->string('finder_review');
            $table->integer('asin');
            $table->string('image_url');
            $table->string('details_url');
            $table->string('baby_url');
            $table->string('wedding_url');
            $table->string('wishlist_url');
            $table->string('customers_url');
            $table->string('offers_url');
            $table->string('baby_url');
            $table->string('wedding_url');
            $table->string('wishlist_url');
            $table->string('customers_url');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
