import axios from "axios";
import { useCallback, useState, useContext } from "react";
import Modal from "react-modal";
import { useMutation, useQueryClient } from "react-query";
import { EventContext } from "./EventProvider";

Modal.setAppElement("#root");
export default function CreateForm({ modalIsOpen, setIsOpen, theDay, events, id, setId }) {

    console.log('modal open');
    const [time, setTime] = useState('08');
    const [minute, setMinute] = useState('15');
    const [event, setEvent] = useState(events);
    const {title, setTitle} = useContext(EventContext);

    const queryClient = useQueryClient();

    const createEvent = async () => {
        console.log('form:', theDay);
        await axios.post('http://localhost:8080/api/public/api/events', { title, theDay, time, minute });
    }

    const mutation = useMutation(createEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('getEvent');
        }
    })

    const modalStyle = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        content: {
            position: "absolute",
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            // backgroundColor: "paleturquoise",
            borderRadius: "1rem",
            padding: "1.5rem"
        }
    };

    const submit = (e) => {
        e.preventDefault();
        mutation.mutate();

        setIsOpen(false);
    };

    return (
        <div className="h-full">
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>
                <div className="text-center">
                    <form onSubmit={submit}>
                        <h2 className="text-3xl">イベント登録</h2>
                        <TitleInput title={title} setTitle={setTitle} id={id} event={event} />
                        <DateInput setTime={setTime} setMinute={setMinute} id={id} event={event} />

                        <button className="btn btn-blue mt-4 mr-4">Create</button>
                        <button className="btn btn-cancel mt-4" onClick={() => setIsOpen(false)}>Close</button>
                    </form>
                </div>

            </Modal>

        </div>

    );

}

const TitleInput = ({ title, setTitle }) => {

    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >タイトル</label>
            <input onChange={e => setTitle(e.target.value)} value={title} className="border rounded-md shadow-sm border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
    )
}

const DateInput = ({ setTime, setMinute, id, event }) => {
    const ev = event.find((e) => {
        return e.id === Number(id);
    })

    const getTime = useCallback((event, getHour) => {
        if (event == null) {
            return getHour ? '08' : '00';
        }

        const schedule = new Date(event.date)
        const valueStr = getHour ? schedule.getHours() : schedule.getMinutes();
        return ('0' + valueStr).slice(-2);
    }, [])

    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >開始時刻</label>
            <select onChange={e => setTime(e.target.value)} value={getTime(ev, true)} name="time" id="time-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {[...Array(12)].map((_, i) => {
                    const num = i + 8;
                    const display = ('00' + num).slice(-2);
                    return <option key={i} value={display}>{display}</option>
                })}
            </select>
            <select onChange={e => setMinute(e.target.value)} value={getTime(ev, false)} name="minutes" id="minutes-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {['00', '15', '30', '45'].map((m, i) => {
                    return <option key={i} value={m}>{m}</option>
                })}
            </select>
        </div>
    );

}