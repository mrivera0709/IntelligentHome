<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// CATEGORY
Route::get('category', 'CategoryController@index');
Route::get('category/{category}', 'CategoryController@show');
Route::post('category','CategoryController@store');
Route::put('category/{category}','CategoryController@update');
Route::delete('category/{category}', 'CategoryController@delete');
// SUBCATEGORY
Route::get('subcategory', 'SubcategoryController@index');
Route::get('subcategory/{subcategory}', 'SubCategoryController@show');
Route::post('subcategory','SubcategoryController@store');
Route::put('subcategory/{subcategory}','SubcategoryController@update');
Route::delete('subcategory/{subcategory}', 'SubcategoryController@delete');
// PRODUCTS
Route::get('products', 'ProductsController@index');
Route::get('products/{product}', 'ProductsController@show');
Route::post('products','ProductsController@store');
Route::put('products/{product}','ProductsController@update');
Route::delete('products/{product}', 'ProductsController@delete');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
