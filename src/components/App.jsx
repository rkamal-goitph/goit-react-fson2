import { SharedLayout } from 'pages/SharedLayout';
import { HomePage } from 'pages/HomePage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
