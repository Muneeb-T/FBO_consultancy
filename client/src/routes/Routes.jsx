import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home-page/Home';
import NotFound from '../pages/not-found/NotFound';
import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
import ApplicationHome from '../pages/application/Home/Application';
import NewApplication from '../pages/application/New application/NewApplication';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        path="/employee"
        element={<Home />}
      />
      <Route path="/admin">
        <Route
          index
          element={<AdminDashboard />}
        />
      </Route>
      <Route path="/application">
        <Route
          index
          element={<ApplicationHome />}
        />
        <Route
          path="new"
          element={<NewApplication />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
