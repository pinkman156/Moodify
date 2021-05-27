import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";
var cors = require("cors");

const spotifyApi = new SpotifyWebApi({
  clientId: "39f3b81250ef4f239e05a3c75103c466",
});

export default function Playlist(props) {
  const accessToken = props.accessToken;

  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    async function getTrack() {
      // console.log(` in playlist.js ${props.playlist}`);
      if (props.playlist === undefined) return;
      // console.log("passed");
      const res = await spotifyApi.getPlaylist(props.playlist);
      // console.log(res.body);

      setPlaylist(res.body);
      // console.log(playlist);

      setTracks(res.body.tracks.items);

      // console.log(tracks);
      if (tracks.length > 0) {
        setPlayingTrack(
          tracks[Math.floor(Math.random() * tracks.length)].track
        );
        console.log(playingTrack);
      }
    }

    if (accessToken) {
      getTrack();
      setLoad(true);
    }
  }, [accessToken, props.playlist]);

  function handleNext(e) {
    e.preventDefault();
    // console.log(tracks);
    if (tracks.length > 0) {
      setPlayingTrack(tracks[Math.floor(Math.random() * tracks.length)].track);
      console.log(playingTrack);
    }
  }

  return (
    <div className="playlist">
      {/* {console.log(load)} */}
      {load && tracks.length > 0 && (
        <div>
          {" "}
          <h2>{playingTrack.name}</h2>{" "}
          <h3>
            {playingTrack.artists !== undefined
              ? playingTrack.artists[0].name
              : null}
          </h3>
        </div>
      )}
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />

      <button className="btn" onClick={handleNext}>
        Press To Play a Track
      </button>
    </div>
  );
}
