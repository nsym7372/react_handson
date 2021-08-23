<?php

namespace App\Http\Controllers;

use App\Models\TrainEvent;
use Illuminate\Http\Request;

class TrainEventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return TrainEvent::all();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrainEvent  $trainEvent
     * @return \Illuminate\Http\Response
     */
    public function show(TrainEvent $trainEvent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrainEvent  $trainEvent
     * @return \Illuminate\Http\Response
     */
    public function edit(TrainEvent $trainEvent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrainEvent  $trainEvent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrainEvent $trainEvent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrainEvent  $trainEvent
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrainEvent $trainEvent)
    {
        //
    }
}
