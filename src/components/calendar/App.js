import { QueryClient, QueryClientProvider } from "react-query";
import SampleCalendar from "./SampleCalendar";

const queryClient = new QueryClient();
export default function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <SampleCalendar />
            </QueryClientProvider>
        </>
    )
}
