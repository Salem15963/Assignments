// import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import React from 'react'
import './Css/PlayerList.css'
// import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PlayerList = (props) => {
    const { removeFromDom , players} = props;

    return (
        <>
        <div>
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className='t-head'>
                            <TableCell>Player Name</TableCell>
                            <TableCell>preferred Position</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {players.map((player, idx) => (
                        <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Link to={"/players/" + player._id}>
                                {player.playerName} 
                            </Link>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Link to={"/players/" + player._id}>
                                {player.preferredPosition} 
                            </Link>
                        </TableCell>
                        <TableCell align="right" className='tbottom'>
                            <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                            <Link to={"/players/" + player._id + "/edit"}>|Edit</Link>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
        </>
    );
}
    
export default PlayerList;

