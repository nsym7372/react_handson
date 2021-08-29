import { EventContext } from "./EventProvider";
import { useCallback, useContext } from "react";

export default function MonthPicker({calendarRef}) {
    const { month, setMonth, year, setYear } = useContext(EventContext);

    const changeMonth = useCallback( (e) => {
        setMonth(e.target.value);
        const calendarApi = calendarRef.current.getApi();
        
        const m = (Number(e.target.value) - 1); //月は0~11迄のインデックス
        const to = new Date(year, m, 1);
        calendarApi.gotoDate(to);
    }, []);

    return (
        <>
            <div className="mt-4 flex">
                <select onChange={e => setYear(e.target.value)} value={year} name="year" id="year-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {['2020', '2021', '2022'].map((m, i) => {
                        return <option key={i} value={m}>{m}</option>
                    })}
                </select>
                <label htmlFor="year-select" className=" block font-medium text-base text-gray-700 mr-4" >年</label>
                <select onChange={e => changeMonth(e)} value={month} name="month" id="month-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {/* <select onChange={e => setMonth(e.target.value)} value={month} name="month" id="month-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"> */}
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