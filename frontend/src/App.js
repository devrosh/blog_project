import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import Account from "./pages/Account";
import SocialShare from "./components/SocialShare";
import Copyright from "./components/Copyright";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <Header />
      <div className="mx-auto max-w-[1200px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost />} />
          {isLoggedIn && <Route path="/account" element={<Account />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
