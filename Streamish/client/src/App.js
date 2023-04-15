import React from "react";
import "./styles/App.css";
import VideoForm from "./components/VideoForm";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div className="App">
      <VideoForm />
      <VideoList />
    </div>
  );
}

export default App;
