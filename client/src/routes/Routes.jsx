import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home-page/Home';
import NotFound from '../pages/not-found/NotFound';
import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Home />}
      />
      <Route path="/admin">
        <Route
          index
          element={<AdminDashboard />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
