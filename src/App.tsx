import React from 'react';

import { Routes, Route } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar';
import AppWrapper from 'containers/AppWrapper';
import PageWrapper from 'containers/PageWrapper';
import Home from 'pages/Home';
import Profile from 'pages/Profile';

const App: React.FC = () => {
    return (
        <AppWrapper>
            <NavigationBar />
            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </PageWrapper>
        </AppWrapper>
    );
};

export default App;
