import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Fetch from "./FetchTable";
import Store from './Store';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();
export default function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Fetch />
                <Store />
            </QueryClientProvider>
        </>
    );
}
