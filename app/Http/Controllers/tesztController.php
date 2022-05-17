<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\teszt;
class tesztController extends Controller
{
    public function index(){
        $teszt = response()->json(teszt::all());
        return $teszt;
    }
    public function index2(){
        $teszt = response()->json(teszt::all());
        return $teszt;
    }
}
