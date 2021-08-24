import { useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

export default function SampleCalendar() {


    // const myEvents = [
    //     {
    //         id: 0,
    //         title: "event 1",
    //         start: "2021-08-22 10:30:00",
    //         end: "2021-08-22 11:00:00",
    //         memo: "memo1",
    //         backgroundColor: "red"
    //     },
    //     {
    //         id: 1,
    //         title: "ああああああああああ",
    //         start: "2021-08-23 10:00:00",
    //         end: "2021-08-23 11:00:00",
    //         memo: "memo2",
    //     },
    // ];
    const [currentEvent, setCurrentEvents] = useState([]);
    const handleEvents = useCallback((events) => {
        console.log("events:", events);  // 確認用
        setCurrentEvents(events);
    }, []);

    const handleDateSelect = useCallback((selectInfo) => {
        let title = prompt("イベントのタイトルを入力してください")?.trim();
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                // id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    }, []);

    const tmpEvents = [
        {
            id: 0,
            title: "event 1",
            date: "2021-08-23",
            backgroundColor: "red",
        },
        {
            id: 1,
            title: "event 2",
            date: "2021-08-24"
        }
    ]

    const { data, status } = useQuery('getEvent', async () => {
        const ret = await axios.get('http://localhost:8080/api/public/api/events');
        return ret.data;
    })

    if(status === 'loading'){ return 'loading'}
    else if(status === 'error'){return 'error'}

    // const handleDateClick = useCallback((arg) => {
    //     // alert(arg.dateStr);
    //     console.log(arg.dateStr);
    // }, []);

    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title} {eventInfo.event.backgroundColor}</i>
            </>
        )
    }

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locales={allLocales}
                locale="ja" // 日本語
                initialEvents={data}
                // dateClick={handleDateClick}
                // eventContent={renderEventContent}
                eventsSet={handleEvents}
                select={handleDateSelect}
                selectable={true}

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