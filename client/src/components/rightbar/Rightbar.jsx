import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({profile}) {
const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>ahmed ali</b> and  <b>3 other friends</b> have birthday today </span>
        </div>
        <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online user={u} key={u.id}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () =>{
    return (<>
          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">Cairo</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Qena</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
            <div className="rightbarFollowing">
              <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
            <div className="rightbarFollowing">
              <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
            <div className="rightbarFollowing">
              <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
            <div className="rightbarFollowing">
              <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
            <div className="rightbarFollowing">
              <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">abdoelati</span>
            </div>
          </div>
      
     </>)
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ?  <ProfileRightbar/>: <HomeRightbar/>}  
      </div>
    </div>
  )
}
