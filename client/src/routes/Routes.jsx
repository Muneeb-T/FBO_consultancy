import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home-page/Home';
import NotFound from '../pages/not-found/NotFound';
const UserRoutes = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Home />}
      />
      <Route
        path="*"
        element={<NotFound />}></Route>
    </Routes>
  );
};

export default UserRoutes;
