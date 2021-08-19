import React from 'react';
import ColorList from './components/0604_ex/ColorList';
import AddColorForm from './components/0603/AddColorForm';
import ColorProvider from './components/0604_ex/ColorProvider';

export default function App() {

    return (
        <ColorProvider>
            <ColorList />
            <AddColorForm />
        </ColorProvider>
    );
}