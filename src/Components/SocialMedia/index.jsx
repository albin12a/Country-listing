import fb from "../../assets/fb.svg";
import linkedin from "../../assets/in.svg";
import google from "../../assets/google.svg";
import x from "../../assets/x.svg";
import "./SocialMedia.scss";
const SocialMedia = () => {
  const socialmedia = [google, fb, linkedin, x];
  return (
    <div>
      <div className="social-media-wrapper">
        {socialmedia.map((val) => (
          <img key={val} src={val} alt="" />
        ))}
      </div>
    </div>
  );
};
export default SocialMedia;
