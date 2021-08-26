import { createContext, useState } from "react";

export const EventContext = new createContext();
export default function EventProvider({ children }) {
    const [title, setTitle] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState('');
    const [targetDay, setTargetDay] = useState('');

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    return (
        <EventContext.Provider value={{
            title, setTitle, modalOpen, setModalOpen, id, setId, targetDay, setTargetDay,
            hours, setHours, minutes, setMinutes
        }}>
            {children}
        </EventContext.Provider>
    )

}