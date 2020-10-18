import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import {useDataLayerValue} from "./Data/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{token },dispatch] = useDataLayerValue()
    useEffect(()=>{
        const hash = getTokenFromUrl()
        window.location.hash='';
        const _token = hash.access_token;
        console.log(_token)

        if(_token){
            spotify.setAccessToken(_token);

            dispatch({
                type:'SET_TOKEN',
                token:_token
            })
            spotify.getMe()
                .then(user =>{
                    // console.log(user)
                    dispatch({
                        type:'SET_USER',
                        user:user,
                    })
                })
            spotify.getUserPlaylists('02wz0ot0p39bs0iqp3in1cn9j').then((playlists)=>{
                console.log(playlists)
                dispatch({
                    type:'SET_PLAYLISTS',
                    playlists,
                })
            })
            spotify.getPlaylist('37i9dQZF1DX4uWsCu3SlsH').then(response=>{
                console.log(response)
                dispatch({
                    type:'SET_DISCOVER_WEEKLY',
                    discover_weekly:response,
                })
            })
        }
    },[token,dispatch]);
  return (
    <div className="app">
        {
            token ? (
                <Player spotify={spotify}/>
            ) : (
                <Login/>
            )
        }

    </div>
  );
}

export default App;
