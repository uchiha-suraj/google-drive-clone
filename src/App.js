import { useState } from 'react';
import './App.css';
import FilesView from './components/filesView/FilesView';
import Header from './components/header';
import Sidebar from './components/sidebar';
import SideIcons from './components/sideIcons';
import GDriveLogo from './media/google-drive-logo.png';
import { auth, provider } from "./firebase";

function App() {

  // const [user, setUser] = useState({
  //   displayName: "Suraj Adhikary",
  //   email: "adhikarysuraj816@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL: "https://lh3.googleusercontent.com/ogw/ADGmqu94E2Y4kbPN_GrwZIi9LsvaQLw_0CDpgjydAjaI=s32-c-mo"
  // })

  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto = {user.photoURL} />

            <div className = "app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
          <div className = "app__login">
            <img src = {GDriveLogo} alt = "Google Drive" />
            <button onClick = {handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
