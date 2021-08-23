import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Fetch from "./FetchTable";
import Store from './Store';

const queryClient = new QueryClient();
export default function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Fetch />
                <Store />
            </QueryClientProvider>
        </>
    );
}
