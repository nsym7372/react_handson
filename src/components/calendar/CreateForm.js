import Modal from "react-modal";

Modal.setAppElement("#root");
export default function CreateForm({ modalIsOpen, setIsOpen }) {

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

    return (
        <div>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl">イベント登録</h2>
                    <TitleInput />
                    <DateInput />

                    {/* <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white mt-4" onClick={() => setIsOpen(false)}>Close Modal</button> */}

                    <button className="btn btn-blue mt-4 mr-4" onClick={() => setIsOpen(false)}>Create</button>
                    <button className="btn btn-cancel mt-4" onClick={() => setIsOpen(false)}>Close</button>

                </div>

            </Modal>

        </div>

        // 外枠
        // <div>
        //     <x-label for="email" :value="__('Email')" />

        //     <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
        // </div>

        //input
        // <input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50']) !!}></input>

        //label
        // <label {{ $attributes->merge(['class' => 'block font-medium text-sm text-gray-700']) }}>
        //     {{ $value ?? $slot }}
        // </label>
    );

}

const TitleInput = () => {
    return (
        <div className="mt-4">
            <label for="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >タイトル</label>
            <input className="border rounded-md shadow-sm border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
    )
}

const DateInput = () => {
    return (
        <div className="mt-4">
            <label for="time-select" className="float-left block font-medium text-base text-gray-700 mr-4" >開始時刻</label>
            <select name="time" id="time-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {[...Array(12)].map((_, i) => {
                    const num = i + 8;
                    const display = ('00' + num).slice(-2);
                    return <option key={i} value={display}>{display}</option>
                })}
            </select>
            <select name="minutes" id="minutes-select" className="w-16 mr-2 rounded-md shadow-sm border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {['00', '15', '30', '45'].map((m, i) => {
                    return <option key={i} value={m}>{m}</option>
                })}
            </select>
        </div>
    );

}