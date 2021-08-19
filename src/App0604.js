import React from 'react';
import ColorList from './components/0604/ColorList';
import AddColorForm from './components/0603/AddColorForm';
import ColorProvider from './components/0604/ColorProvider';

export default function App() {

    return (
        <ColorProvider>
            <ColorList />
            <AddColorForm />
        </ColorProvider>
    );
}