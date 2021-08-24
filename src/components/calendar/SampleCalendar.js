import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";
import { useQuery } from "react-query";
import axios from "axios";

export default function SampleCalendar() {

    const { data, status } = useQuery('getEvent', async () => {
        const ret = await axios.get('http://localhost:8080/api/public/api/events');
        return ret.data;
    })

    if(status === 'loading'){ return 'loading'}
    else if(status === 'error'){return 'error'};

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locales={allLocales}
                locale="ja" // 日本語
                initialEvents={data}

                eventDisplay="block"


            // defaultView="timeGridWeek" // 基本UI
            // slotDuration="00:30:00" // 表示する時間軸の最小値
            // selectable={true} // 日付選択可能
            // allDaySlot={false} // alldayの表示設定
            // titleFormat={{
            //     year: "numeric",
            //     month: "short",
            //     day: "numeric",
            // }} // タイトルに年月日を表示
            // header={{
            //     left: "prev,next,today",
            //     center: "title",
            //     right: "dayGridMonth,timeGridWeek",
            // }}
            // businessHours={{
            //     daysOfWeek: [1, 2, 3, 4, 5],
            //     startTime: "0:00",
            //     endTime: "24:00",
            // }}
            // plugins={[dayGridPlugin]}
            // // ref={this.ref}
            // weekends={true} // 週末表示
            // events={myEvents} // 起動時に登録するイベント
            // // select={this.handleSelect} // カレンダー範囲選択時
            // // eventClick={this.handleClick} // イベントクリック時
            // // initialView="timeGridWeek"
            // eventColor='blue'
            // eventBackgroundColor='green'
            // eventDisplay='block'
            // start={[new Date()]}
            />
        </>
    );
}