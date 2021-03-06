<?php

namespace App\Http\Controllers;

use App\Models\TrainEvent;
use Carbon\Carbon;
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $newEvent = new TrainEvent();
        $newEvent->title = $request->title;
        $newEvent->date = "{$request->targetDay} {$request->hours}:{$request->minutes}";
        $newEvent->area = $request->area;
        $event = $newEvent->save();
        return $event ? response()->json($event, 201) : response()->json([], 500);
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\Models\TrainEvent  $trainEvent
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(TrainEvent $trainEvent)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrainEvent  $trainEvent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrainEvent $event)
    {
        //
        $event->title = $request->title;
        $event->date = "{$request->targetDay} {$request->hours}:{$request->minutes}";
        $event->area = $request->area;
        $event = $event->save();
        return $event ? response()->json($event, 200) : response()->json([], 500);
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
