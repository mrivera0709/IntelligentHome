<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    //
    public function getIndex()
    {
        return View::make('home.index');
    }
    
    public function getSearch()
    {
        return View::make('home.api');
    }
}
