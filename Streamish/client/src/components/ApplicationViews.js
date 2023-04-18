import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";

const ApplicationViews = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={isLoggedIn ? <VideoList /> : <Navigate to="/login" />}
        />
        <Route path="video">
          <Route
            path="add"
            element={isLoggedIn ? <VideoForm /> : <Navigate to="/login" />}
          />
          <Route
            path=":id"
            element={isLoggedIn ? <VideoDetails /> : <Navigate to="/login" />}
          />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
};

export default ApplicationViews;
