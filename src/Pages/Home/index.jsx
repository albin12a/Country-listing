import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./Home.scss";
import SocialMedia from "../../Components/SocialMedia";
import Loader from "../../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../../store/slice/homeSlice";
const Home = () => {
  const [filter, setFilter] = useState("all");
  const [isloading, setIsLoading] = useState(false);

  const countries = useSelector((state) => {
    return state.home.country;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://restcountries.com/v2/all?fields=name,region,flag&region=${filter}`
      )
      .then((res) => {
        dispatch(setCountries({ countries: res.data }));
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
            {countries?.map((val) => (
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
