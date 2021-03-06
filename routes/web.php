<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/about', 'AboutController@index')->name('about');

Route::get('/privacy', 'PrivacyController@index')->name('privacy');

Route::get('/affiliate', 'AffiliateController@index')->name('affiliate');

Route::get('/admin', 'AdminController@index')->name('admin');

Auth::routes();