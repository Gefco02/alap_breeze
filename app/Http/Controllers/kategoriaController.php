<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kategoria;

class kategoriaController extends Controller
{
    public function index(){
        $kategoriak = response()->json(kategoria::all());
        return $kategoriak;
    }
}
