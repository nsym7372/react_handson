import { createContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const EventContext = new createContext();
export default function EventProvider({ children }) {
    const [title, setTitle] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState('');
    const [targetDay, setTargetDay] = useState('');

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const [events, setEvents] = useState([]);
    // const [filteredEvents, setFilteredEvents] = useState([])
    const [area, setArea] = useState('国内');
    //
    const [month, setMonth] = useState('08');
    const [year, setYear] = useState('2021')

    const { status } = useQuery('getEvent', async () => {
        const ret = await axios.get('http://localhost:8080/api/public/api/events');
        setEvents(ret.data);
    })

    if (status === 'loading') { return 'loading' }
    else if (status === 'error') { return 'error' };

    return (
        <EventContext.Provider value={{
            title, setTitle, modalOpen, setModalOpen, id, setId, targetDay, setTargetDay,
            hours, setHours, minutes, setMinutes, events, 
            area, setArea, 
            month, setMonth, year, setYear
        }}>
            {children}
        </EventContext.Provider>
    )

}