import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useMutation, useQueryClient } from "react-query";

Modal.setAppElement("#root");
export default function CreateForm({ modalIsOpen, setIsOpen, theDay, events, id }) {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('08');
    const [minute, setMinute] = useState('15');
    const [event, setEvent] = useState(events);

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

    const submit = e => {
        e.preventDefault();
        mutation.mutate();

        setIsOpen(false)
    }

    return (
        <div className="h-full">
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>
                <div className="text-center">
                    <form onSubmit={submit}>
                        <h2 className="text-3xl">イベント登録</h2>
                        <TitleInput setTitle={setTitle} id={id} event={event} />
                        <DateInput setTime={setTime} setMinute={setMinute} />

                        <button className="btn btn-blue mt-4 mr-4">Create</button>
                        <button className="btn btn-cancel mt-4" onClick={() => setIsOpen(false)}>Close</button>
                    </form>
                </div>

            </Modal>

        </div>

    );

}

const TitleInput = ({setTitle, id, event}) => {
    const ev = event.find((e) => {
        return e.id === Number(id);
    })

    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >タイトル</label>
            <input onChange={e => setTitle(e.target.value)} value={ev.title} className="border rounded-md shadow-sm border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
    )
}

const DateInput = ({setTime, setMinute}) => {
    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >開始時刻</label>
            <select onChange={e => setTime(e.target.value)} name="time" id="time-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {[...Array(12)].map((_, i) => {
                    const num = i + 8;
                    const display = ('00' + num).slice(-2);
                    return <option key={i} value={display}>{display}</option>
                })}
            </select>
            <select onChange={e => setMinute(e.target.value)}  name="minutes" id="minutes-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {['00', '15', '30', '45'].map((m, i) => {
                    return <option key={i} value={m}>{m}</option>
                })}
            </select>
        </div>
    );

}