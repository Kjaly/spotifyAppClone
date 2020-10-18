import React from 'react';
import './Body.scss'
import Header from "./Header/Header";
import {useDataLayerValue} from "../../../Data/DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow/SongRow";

const Body = ({spotify}) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className="body__info">
                <img className={'body__image'} src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>ПЛЕЙЛИСТ</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description} </p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className={'body__shuffle'}/>
                    <FavoriteIcon fontSize={'large'}/>
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item=>(
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
