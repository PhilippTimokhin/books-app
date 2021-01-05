import React, { useState, useEffect } from "react";
import fire from "../../fire";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Pages from "../Pages/Pages";
import Footer from "../Footer/Footer";

const ReadyApp = () => {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignOut = () => {
    fire.auth().signOut();
  };

  const enabled = email.length > 0 && password.length > 0;

  useEffect(() => {
    const authListenner = () => {
      try {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            clearInputs();
            setUser(user);
          } else {
            setUser("");
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    authListenner();
  }, []);

  return (
    <React.Fragment>
      {user ? (
        <>
          <Header handleSignOut={handleSignOut} />
          <Pages />
          <Footer />
        </>
      ) : (
        <>
          <Login
            enabled={enabled}
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            password={password}
            setPassword={setPassword}
            passwordError={passwordError}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
          />
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};

export default ReadyApp;
