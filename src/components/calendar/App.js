import { QueryClient, QueryClientProvider } from "react-query";
import SampleCalendar from "./SampleCalendar";
import EventProvider from "./EventProvider";

const queryClient = new QueryClient();
export default function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <EventProvider>
                    <SampleCalendar />
                </EventProvider>
            </QueryClientProvider>
        </>
    )
}
