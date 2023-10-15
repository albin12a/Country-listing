import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./Home.scss";
import SocialMedia from "../../Components/SocialMedia";
import Loader from "../../Components/Loader";
const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://restcountries.com/v2/all?fields=name,region,flag&region=${filter}`
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filter]);
  return (
    <>
      {!isloading ? (
        <div className="home">
          <Navbar filter={filter} setFilter={setFilter} />
          <div className="main-wrapper content row">
            {data?.map((val) => (
              <Card className="box-width" key={val?.alpha3Code} value={val} />
            ))}
          </div>
          <SocialMedia />
          <p className="email">Example@email.com</p>
          <p className="copyright">
            Copyright © 2020 Name. All rights reserved.
          </p>
        </div>
      ) : (
        <Loader visible={isloading} />
      )}
    </>
  );
};
export default Home;
