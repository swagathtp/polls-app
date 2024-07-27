import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import "./page1/Home.css";
import "./page3/Vote.css";
import "./Page4/Create.css";
import Home from "./page1/Home";
import PollDetail from "./page2/PollDetail";
import Vote from "./page3/Vote";
import Create from "./Page4/Create";
import Headingmain from "./Heading";
import Alertpg3 from "./Alertpg3";
import './App.css';
export default function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Headingmain/>
    <div class="item item-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll" element={<PollDetail />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/createpoll" element={<Create />} />
      </Routes>
      </div>
      <div class="item item-1">
    <Alertpg3/>
    </div>
      </div>
    </BrowserRouter>
  );
}