import { createContext, useState } from "react";

export const EventContext = new createContext();
export default function EventProvider({children}){
    const [title, setTitle] = useState('');

    return(
        <EventContext.Provider value={{title, setTitle}}>
            {children}
        </EventContext.Provider>
    )

}