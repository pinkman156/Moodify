import { React, useState, useEffect } from "react";
import Weather from "./Weather";
import Playlist from "./Playlist";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../styles/Dashboard.css";

export default function Dashboard(props) {
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState([]);
  const [place, setPlace] = useState("");
  const [load, setLoad] = useState(false);
  const [name, setName] = useState("some");
  const [playlist, setPlaylist] = useState("");

  const accessToken = props.token;

  useEffect(() => {
    if (weather.length > 0 && weather !== undefined) {
      console.log(weather);

      if (weather[0].id / 100 === 2) {
        setName("Thunder");
        setPlaylist("4u6dVFGpbxRmLI3mQFKrCt");
      }

      if (weather[0].id / 100 === 3) {
        setName("Drizzly");
        setPlaylist("3zbMsHD4TZzJ67T5pCJw4Q");
      }

      if (weather[0].id / 100 === 5) {
        setName("Rainy");
        setPlaylist("5O1wJcJ8ioKAa1a1YjOXVQ");
      }
      if (weather[0].id / 100 === 6) {
        setName("Snow");
        setPlaylist("5UpF6UeRgibUfkOcienZYA");
      }
      if (weather[0].id / 100 === 7) {
        setName("Sunny");
        setPlaylist("4tdEP0n9SzQz14VAOLpp9w");
      }
      if (weather[0].id === 800) {
        setName("Sunny");
        setPlaylist("1ajIsCfe139d4HFvLY1SBv");
      } else {
        setName("Cloudy");
        setPlaylist("3oh3NmpgHy2leLcu7oobAr");
      }
      setLoad(true);
    }
  }, [weather]);

  return (
    <div>
      <NavBar />

      <div className={name}>
        <Weather temp={setTemp} weather={setWeather} place={setPlace} />
        {console.log(`this is ${place}`)}

        {console.log(load)}

        {load && (
          <div>
            <h1>{name}</h1>
            <h4>{weather[0].description}</h4>

            <h3>{temp} ° F</h3>
          </div>
        )}
        <h2> songs for {name} vibes </h2>
        {load && (
          <div class="player">
            <Playlist accessToken={accessToken} playlist={playlist} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
