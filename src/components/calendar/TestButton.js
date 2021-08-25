import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export default function TestButton() {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('title');
    const [day, setDay] = useState('2021-08-25');
    const [time, setTime] = useState('08');
    const [minute, setMinute] = useState('00');

    const createEvent = async () => {
        await axios.post('http://localhost:8080/api/public/api/events', { title, day, time, minute });
    }

    const mutation = useMutation(createEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('getEvent');
        }
    })

    const submit = e => {
        e.preventDefault();
        mutation.mutate();
    }

    return (
        <div className="h-full">
            <form onSubmit={submit}>
                <button className="btn btn-blue mt-4 mr-4">test</button>
            </form>
        </div>
    );
}