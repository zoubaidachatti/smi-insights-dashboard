import "../../styles/profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src="/images/avatars/Image-1.png" alt="profile" />
      </div>
      <div className="profile-block">
        <div className="username">John Doe</div>
        <div className="sur-text">Profile</div>
      </div>
    </div>
  );
};

export default Profile;
