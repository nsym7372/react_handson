import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";
import { useCallback, useContext, useRef } from "react";
import CreateForm from "./CreateForm";
import { EventContext } from "./EventProvider";
// import TestButton from "./TestButton";
// import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import MonthPicker from "./MonthPicker";


export default function SampleCalendar() {
    const { setTitle, setModalOpen, setId, setTargetDay, setHours, setMinutes, events, setArea, year, month } = useContext(EventContext);

    const handleEvents = useCallback((ev) => {
        console.log("eventsSet:", ev);  // 確認用
        // setCurrentEvents(events);
    }, []);

    // 日付選択：複数日でもOK
    const handleDateSelect = useCallback((selectInfo) => {
        // console.log('select:', selectInfo);
    }, []);

    // 日付クリック：当日のみ
    const handleDateClick = useCallback((arg) => {
        setTargetDay(arg.dateStr);
        setHours('08');
        setMinutes('00');
        setId('');
        setTitle('');
        setArea('国内');
        setModalOpen(true);
        // console.log('dateClick:', arg.dateStr);
    }, [setTitle, setModalOpen, setId, setTargetDay, setHours, setMinutes, setArea]);

    // 登録済みイベントクリック
    const handleEventClick = useCallback((arg) => {
        // console.log('eventClick:', arg);

        const ev = events.find((e) => {
            return e.id === Number(arg.event.id);

        })
        setTitle(ev ? ev.title : '');

        // window.location.replace(`http://localhost:8080/${arg.event.id}`);
        // window.open(`http://localhost:8080/${arg.event.id}`);

        const date = new Date(ev.date)
        const dateStr = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
        setTargetDay(dateStr);
        setHours(('0' + date.getHours()).slice(-2));
        setMinutes(('0' + date.getMinutes()).slice(-2));
        setId(arg.event.id);
        setArea(ev.area);
        setModalOpen(true);
    }, [events, setTitle, setModalOpen, setId, setTargetDay, setHours, setMinutes, setArea]);

    return (

        <div className="container mx-auto my-12">
            {/* <TestButton /> */}
            {/* <MonthPicker /> */}
            <CreateForm />
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                initialView="dayGridMonth"
                locales={allLocales}
                locale="ja" // 日本語
                eventDisplay="block"

                selectable={true}   //クリック許可
                eventsSet={handleEvents}    //予定初期化、変更時（全ての予定が対象）
                dateClick={handleDateClick} //日付クリック：当日のみ
                select={handleDateSelect}   //日付選択：複数日でもOK
                eventClick={handleEventClick}   // 登録済みイベントクリック
                events={events}
                headerToolbar={{
                    'left': 'prevYear,prev,next,nextYear today',
                    'center': 'title',
                    'right': 'dayGridMonth listYear'
                }}
                // aspectRatio={1.15}
                contentHeight="auto"
                weekends={true}                

                // timeFormat={'H(:mm)'}
                // // 列の書式
                // columnFormat={{
                //     month: 'ddd',    // 月
                //     week: "d'('ddd')'", // 7(月)
                //     day: "d'('ddd')'" // 7(月)
                // }}
                buttonText={{month: 'カレンダー', list: '一覧'}}
                dayCellContent={e => e.dayNumberText = e.dayNumberText.replace('日', '')}
                
                

                showNonCurrentDates={true}
                fixedWeekCount={false}
                // height="100"


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

        </div>

    );
}