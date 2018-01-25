<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Http\amazon;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
        
        
    }
}
