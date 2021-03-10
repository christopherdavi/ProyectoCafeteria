<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Http\Resources\ProductoResource;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexDetalle()
    {
        //
         $producto = Producto::all();
         return ProductoResource::collection($producto);
    }

    public function index()
    {
        //
         $producto = Producto::all();
         return $producto;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producto= new Producto();
        $producto->nombre=$request->nombre;
        $producto->detalle=$request->detalle;
        $producto->precio=$request->precio;
        $producto->categoria_id=$request->categoria_id;

        if($producto->save()){
            return new ProductoResource($producto);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $producto = Producto::findOrFail($id);
        return new ProductoResource($producto);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $producto = Producto::find($id);
      return $producto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producto= Producto::find($id);
        $producto->nombre=$request->get("nombre");
        $producto->detalle=$request->get("detalle");
        $producto->precio=$request->get("precio");
        $producto -> save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto= Producto::findOrFail($id);

        if($producto->delete()){
            return new ProductoResource($producto);
        }
    }
}
