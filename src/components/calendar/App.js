import { QueryClient, QueryClientProvider } from "react-query";
import SampleCalendar from "./SampleCalendar";
import EventProvider from "./EventProvider";

const queryClient = new QueryClient();
export default function App() {

    return (
        <>
            <EventProvider>
                <QueryClientProvider client={queryClient}>
                    <SampleCalendar />
                </QueryClientProvider>
            </EventProvider>
        </>
    )
}
