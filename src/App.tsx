import React from 'react';

import { Routes, Route } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar';
import AppWrapper from 'containers/AppWrapper';
import PageWrapper from 'containers/PageWrapper';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Post from 'pages/Post';

const App: React.FC = () => {
    return (
        <AppWrapper>
            <NavigationBar />
            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profiles/:id" element={<Profile />} />
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </PageWrapper>
        </AppWrapper>
    );
};

export default App;
