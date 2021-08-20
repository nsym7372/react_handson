import React from 'react';
import ColorList from './ColorList';
import AddColorForm from '../0603/AddColorForm';
import ColorProvider from './ColorProvider';

export default function App() {

    return (
        <ColorProvider>
            <ColorList />
            <AddColorForm />
        </ColorProvider>
    );
}