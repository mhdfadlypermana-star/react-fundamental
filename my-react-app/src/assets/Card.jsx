import ProfilePic from "./profile.jpg";

function Card({ children }) {
  return (
    <div className="card">
      <img className="card-image" src={ProfilePic} alt="profile picture"></img>
      <h2 className="card-title">M F P</h2>
      <p className="card-text">Aku membuat website dan bermain game</p>
      {children}
    </div>
  );
}

export default Card;
