<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Http\Resources\PedidoResource;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
         $pedido = Pedido::all();
         return PedidoResource::collection($pedido);
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
        $pedido= new Pedido();
        $pedido->fecha=$request->fecha;
        $pedido->orden=$request->orden;
        $pedido->total=$request->total;
        $pedido->detalle_id=$request->detalle_id;
        $pedido->user_id=$request->user_id;

        if($pedido->save()){
            return new PedidoResource($pedido);
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
        $pedido = Pedido::where("pedidos.user_id", "=", $id)
        ->select("pedidos.orden", "users.name", "users.email","perfils.cedula", "perfils.telefono", "perfils.direccion")
        ->join("users", "users.id", "=", "pedidos.user_id")
        ->join("perfils", "perfils.user_id", "=", "users.id")
        ->get();
        return $pedido;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $pedido= Pedido::findOrFail($id);
        $pedido->orden=$request->orden;
        $pedido->total=$request->total;
        $pedido->detalle_id=$request->detalle_id;
        $pedido->user_id=$request->user_id;

        if($pedido->save()){
            return new PedidoResource($pedido);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pedido= Pedido::findOrFail($id);

        if($pedido->delete()){
            return new PedidoResource($pedido);
        }
    }
}
