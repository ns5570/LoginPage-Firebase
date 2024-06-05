import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaRocket, FaHeart, FaShare } from "react-icons/fa"; // Import icons
import "./profile.css";
import companyLogo from "./logo.png"; // Assuming you have a logo image
import image1 from "./image1.png"; // Assuming you have image 1
import image2 from "./image2.png"; // Assuming you have image 2

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
      setError("Failed to log out. Please try again.");
    }
  }

  return (
    <div className="app-container">
      <div className="sidebar">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="company-logo"
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
        <div className="profile-header">
          {userDetails && (
            <>
              <img
                src={userDetails.photo}
                className="profile-photo"
                alt="Profile"
                style={{ borderRadius: "50%", width: "80px", height: "80px" }}
              />
              <h3>{userDetails.firstName}</h3>
            </>
          )}
        </div>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>
        <button className="btn btn-primary logout-button" onClick={handleLogout}>
          Logout
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="main-content">
        <div className="feed">
          <h2>Home Feed</h2>
          <div className="feed-post-1">
            <h3>Post Title 1</h3>
            <div className="post-cover">
              <img src={image1} alt="Post 1" className="post-image" />
            </div>
            <p>This is an example of a user post.</p>
            <div className="post-actions">
              <button className="post-button">
                <FaRocket />
              </button>
              <button className="post-button">
                <FaHeart />
              </button>
              <button className="post-button">
                <FaShare />
              </button>
            </div>
          </div>
          
          <div className="feed-post">
            <h3>Post Title 2</h3>
            <div className="post-cover">
              <img src={image2} alt="Post 2" className="post-image" />
            </div>
            <p>This is another example of a user post.</p>
            <div className="post-actions">
              <button className="post-button">
                <FaRocket />
              </button>
              <button className="post-button">
                <FaHeart />
              </button>
              <button className="post-button">
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
