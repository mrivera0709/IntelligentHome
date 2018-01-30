<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subcategory;

class SubcategoryController extends Controller
{
    public function index()
    {
        return Subcategory::all();
    }

    public function show(Subcategory $subcategory)
    {
        return $subcategory;
    }

    public function store(Request $request)
    {
        $subcategory = Subcategory::create($request->all());

        return response()->json($subcategory, 201);
    }

    public function update(Request $request, Subcategory $subcategory)
    {
        $subcategory->update($request->all());

        return response()->json($subcategory, 200);
    }

    public function delete(Subcategory $subcategory)
    {
        $subcategory->delete();

        return response()->json(null, 204);
    }
}
