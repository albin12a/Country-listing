/* eslint-disable react/prop-types */
import hambergger from '../../../../assets/hambergger.svg'
import "./Navbar.scss";
const Navbar = (props) => {
  const tab = ["all", "asia", "europe"];
  return (
    <nav>
      <div className="main-wrapper nav-wrapper">
        <h5>Countries</h5>
        <ul>
          {tab?.map((val) => (
            <li
              className={val === props?.filter && "active"}
              onClick={() => props?.setFilter(val)}
              key={val}
            >
              {val}
            </li>
          ))}
        </ul>
        <img className='hambergger' src={hambergger} alt=""/>
      </div>
    </nav>
  );
};
export default Navbar;
