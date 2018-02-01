<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    protected $fillable = ['product_name', 'product_brand', 'price', 'details', 'finder_rating', 'finder_review', 'asin', 'image_url'];

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
}
