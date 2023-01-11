import React, { useState, useEffect } from "react";
import Home from "./componenets/Home";
import PlayVideo from "./componenets/PlayVideo";
import Navbar from "./componenets/Navbar";
import ProfileEdit from "./componenets/Section/ProfileEdit";
import Signup from "./componenets/Section/Signup";
import Login from "./componenets/Section/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./componenets/Section/ProfilePage";

function App() {
  const hello = localStorage.getItem("UserName");
  console.log(hello);

  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  function setLogin(name, id) {
    setUsername(name);
    setId(id);
    // console.log(username , isLogin);
  }
  return (
    <>
      {/* {isHome ? <Home click={clickHandler}/> : <PlayVideo click={clickHandler}/>} */}
      {/* <PlayVideo click={clickHandler}/> */}

      <BrowserRouter forceRefresh={false}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login username={username} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/play"
            element={<PlayVideo username={username} />}
          />
          {/* <Route exact path="/home" element={<Home username={username} />} /> */}
          {hello ? (
            <Route exact path="/home" element={<Home username={hello} />} />
          ) : (
            <Route exact path="/home" element={<Home username={username} />} />
          )}

          <Route
            exact
            path="/signup"
            element={<Signup username={username} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/edit"
            element={<ProfileEdit id={id} username={username} />}
          />
          {hello ? (
            <Route
              exact
              path="/profile"
              element={<ProfilePage username={hello} />}
            />
          ) : (
            <Route
              exact
              path="/profile"
              element={<ProfilePage username={username} />}
            />
          )}
          {/* <Route
            exact
            path="/profile"
            element={<ProfilePage username={username} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;