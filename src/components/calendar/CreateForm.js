import axios from "axios";
import { useContext } from "react";
import Modal from "react-modal";
import { useMutation, useQueryClient } from "react-query";
import { EventContext } from "./EventProvider";

Modal.setAppElement("#root");
export default function CreateForm() {
    const { title, modalOpen, setModalOpen, targetDay, hours, minutes, id, area } = useContext(EventContext);

    const createEvent = async () => {
        await axios.post('http://localhost:8080/api/public/api/events', { title, targetDay, hours, minutes, area });
    }

    const updateEvent = async () => {
        await axios.put(`http://localhost:8080/api/public/api/events/${id}`, { title, targetDay, hours, minutes, area })
    }

    const queryClient = useQueryClient();
    const storeMutation = useMutation(createEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('getEvent');
        }
    })

    const updateMutation = useMutation(updateEvent, {
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
        id ? updateMutation.mutate() : storeMutation.mutate();
        setModalOpen(false);
    };

    const message = id ? 'イベント更新' : 'イベント登録';
    const buttonText = id ? 'update' : 'create';
    return (
        <div className="h-full">
            <Modal isOpen={modalOpen} style={modalStyle} onRequestClose={() => setModalOpen(false)}>
                <div className="text-center">
                    <form onSubmit={submit}>
                        <h2 className="text-3xl">{message}</h2>
                        <TitleInput />
                        <DateInput />
                        <AreaDisplay />
                        <div>
                            <button className="btn btn-blue mt-4 mr-4">{buttonText}</button>
                            <button className="btn btn-cancel mt-4" onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                    </form>
                </div>

            </Modal>

        </div>

    );

}

const TitleInput = () => {
    const { title, setTitle } = useContext(EventContext);
    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >タイトル</label>
            <input onChange={e => setTitle(e.target.value)} value={title} className="border rounded-md shadow-sm border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
    )
}

const DateInput = () => {
    const { hours, setHours, minutes, setMinutes } = useContext(EventContext);

    return (
        <div className="mt-4">
            <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >開始時刻</label>
            <select onChange={e => setHours(e.target.value)} value={hours} name="time" id="time-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {[...Array(12)].map((_, i) => {
                    const num = i + 8;
                    const display = ('00' + num).slice(-2);
                    return <option key={i} value={display}>{display}</option>
                })}
            </select>
            <select onChange={e => setMinutes(e.target.value)} value={minutes} name="minutes" id="minutes-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {['00', '15', '30', '45'].map((m, i) => {
                    return <option key={i} value={m}>{m}</option>
                })}
            </select>

        </div>
    );

}

const AreaDisplay = () => {
    const { area, id } = useContext(EventContext);
    const contents = <div className="mt-4">
        <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >区分</label>
        <label htmlFor="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >{area}</label>
        <br />
    </div>;
    return (
        [contents]
    )
}