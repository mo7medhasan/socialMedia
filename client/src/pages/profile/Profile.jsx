import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <div className="profileRightTop">
              <img
                src={`${PF}post/3.jpeg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/7.jpeg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Odain muhmoud</h4>
              <span className="profileInfoDesc">Hello my friends! </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
