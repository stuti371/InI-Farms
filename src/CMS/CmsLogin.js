import React, {useState, useEffect} from "react";
import {db, provider, auth} from "../services/firebase";
import {Link} from "react-router-dom";
import CmsMain from "./CmsMain";

const CmsLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user_val) => {
      if (user_val) {
        setUser(user_val);
      }
    })
  }, [])

  const login = () => {
    auth.signInWithPopup(provider)
      .then((res) => {
        const user_res = res.user;
        setUser(user_res);
        console.log(user);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      console.log(user);
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <Link to="/homepage">
          <span
            className="btn"
            aria-label="Home"
            title="Home"
            role="img"
            style={{
              borderRadius: "0",
              fontSize: "1rem"
            }}
          >
            🏠
          </span>
        </Link>
        {
          user ?
            <div style={{
              display: "flex",
              gap: "1rem"
            }}>
              <h5 style={{alignSelf: "center"}}>{user.displayName}</h5>
              <button style={{borderRadius: "0"}} className="btn" onClick={logout}>Logout</button>
            </div>
            :
            <button style={{borderRadius: "0"}} className="btn" onClick={login}>Log In</button>
        }
      </div>
      <div style={{display: "flex", gap: "2rem", padding: "2rem"}}>
        {
          user ?
            <CmsMain/>
            :
            <h1 style={{
              textAlign: "center",
              margin: "0 auto"
            }}>Welcome to the secret place, please login to continue</h1>
        }
      </div>

    </div>
  );
};

export default CmsLogin;
