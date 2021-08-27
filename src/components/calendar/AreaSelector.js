import { EventContext } from "./EventProvider";
import { useContext } from "react";

export default function AreaSelector() {
    const { area, setArea, events, setFilteredEvents } = useContext(EventContext);

    const change = (e) => {
        setArea(e.target.value)
        setFilteredEvents(events.filter((ev, i) => { return ev.area === e.target.value }));
 
    }

    return (
        <>
            <div className="mt-4 flex">
                <label htmlFor="area-select" className=" block font-medium text-base text-gray-700 mr-4" >分類</label>
                <select onChange={e => change(e)} value={area} name="area" id="area-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {['国内', '海外'].map((m, i) => {
                        return <option key={i} value={m}>{m}</option>
                    })}
                </select>
            </div>
        </>
    )
}