import { EventContext } from "./EventProvider";
import { useContext } from "react";

export default function MonthPicker() {
    const { month, setMonth, year, setYear } = useContext(EventContext);

    return (
        <>
            <div className="mt-4 flex">
                <select onChange={e => setYear(e.target.value)} value={year} name="year" id="year-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {['2020', '2021', '2022'].map((m, i) => {
                        return <option key={i} value={m}>{m}</option>
                    })}
                </select>
                <label htmlFor="year-select" className=" block font-medium text-base text-gray-700 mr-4" >年</label>
                <select onChange={e => setMonth(e.target.value)} value={month} name="month" id="month-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {[...Array(12)].map((_, i) => {
                        const num = ('0' + (i + 1)).slice(-2);
                        return <option key={i} value={num}>{num}</option>
                    })}
                </select>
                <label htmlFor="month-select" className="block font-medium text-base text-gray-700 mr-4" >月</label>

            </div>
        </>
    )
}