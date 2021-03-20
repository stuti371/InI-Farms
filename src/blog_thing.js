import React, {useState, useEffect} from "react";
import {db, provider, auth} from "./services/firebase";
import { Link } from "react-router-dom";

const WriteMedia = () => {

  const [journeyTitle, setJourneyTitle] = useState("");
  const [journeyImgLink, setJourneyImgLink] = useState("");
  const [journeyLink, setJourneyLink] = useState("");
  const [journeyContent, setJourneyContent] = useState("");

  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");

  const [media, setMedia] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user_val) => {
      if (user_val) {
        setUser(user_val);
      }
    })
  }, [])

  const handleSubmitJourney = (e) => {
    e.preventDefault();
    const journeyRef = db.ref("Journey/");
    const journey = {
      title: journeyTitle,
      imgLink: journeyImgLink,
      link: journeyLink,
      content: journeyContent,
    };
    journeyRef.push(journey).then((data) => {
      console.log("Success: ", data);
    }).catch((e) => {
      console.log("error: ", e);
    });

    setJourneyTitle("");
    setJourneyImgLink("");
    setJourneyLink("");
    setJourneyContent("");
  };

  const handleSubmitPOV = (e) => {
    e.preventDefault();
    const journeyRef = db.ref("POV/");
    const journey = {
      title: title,
      imgLink: imgLink,
      link: link,
      content: content,
    };
    journeyRef.push(journey).then((data) => {
      console.log("Success: ", data);
    }).catch((e) => {
      console.log("error: ", e);
    });

    setTitle("");
    setImgLink("");
    setLink("");
    setContent("");
  };

  const handleSubmitMedia = (e) => {
    e.preventDefault();
    const journeyRef = db.ref("Media/");
    const journey = {
      media: media,
    };
    journeyRef.push(journey).then((data) => {
      console.log("Success: ", data);
    }).catch((e) => {
      console.log("error: ", e);
    });

    setMedia("");
  };

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
      <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {
        user ? 
          <>
            <form style={{ width: "33%", display: "flex", flexDirection: "column"}}>
              <h3 style={{ marginBottom: "1.5rem" }}>Journey</h3>
              <label htmlFor="title">Title</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setJourneyTitle(e.target.value)} value={journeyTitle} type="text" id="title" name="somethang" placeholder="Blog Title" />
              <label htmlFor="imgLink">Image Link</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setJourneyImgLink(e.target.value)} value={journeyImgLink} type="text" id="imgLink" name="img-link" placeholder="Image Link" />
              <label htmlFor="link">Link</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setJourneyLink(e.target.value)} value={journeyLink} type="text" id="link" name="link" placeholder="Link" />
              <label htmlFor="content">Content</label>
              <textarea rows="5" style={{ marginBottom: "1rem" }} onChange={(e) => setJourneyContent(e.target.value)} value={journeyContent} type="text" id="content" name="otherthang" placeholder="Blog Content" />
              <button className="btn" onClick={handleSubmitJourney}>Add Journey</button>
            </form>
            <form style={{ width: "33%", display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>POV</h3>
              <label htmlFor="title">Title</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="title" name="somethang" placeholder="Blog Title" />
              <label htmlFor="imgLink">Image Link</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setImgLink(e.target.value)} value={imgLink} type="text" id="imgLink" name="img-link" placeholder="Image Link" />
              <label htmlFor="link">Link</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setLink(e.target.value)} value={link} type="text" id="link" name="link" placeholder="Link" />
              <label htmlFor="content">Content</label>
              <textarea rows="5" style={{ marginBottom: "1rem" }} onChange={(e) => setContent(e.target.value)} value={content} type="text" id="content" name="otherthang" placeholder="Blog Content" />
              <button className="btn" onClick={handleSubmitPOV}>Add POV</button>
            </form>
            <form style={{ width: "33%", display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Media</h3>
              <label htmlFor="mediaLink">Media Link</label>
              <input style={{ marginBottom: "1rem" }} onChange={(e) => setMedia(e.target.value)} value={media} type="text" id="mediaLink" name="mediaLink" placeholder="Media Link" />
              <button className="btn" onClick={handleSubmitMedia}>Add Media</button>
            </form>
          </>
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

export default WriteMedia;
