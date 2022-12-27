// import axios from 'axios';
import { Link } from 'react-router-dom';
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
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';



const PlayerStatus = (props) => {
    const {players} = props;


    return (
        <>
        <div>
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className='t-head'>
                            <TableCell>Team Name</TableCell>
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
                            <TableCell align="right" className='tbottom'>
                            <FormControl
                            >
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={player.status}
                            >
                                <FormControlLabel value="Playing" onClick={e=> props.updateStatus(player._id, e.target.value)} control={<Radio />} label="Playing" />
                                <FormControlLabel value="NotPlaying" onClick={e=> props.updateStatus(player._id, e.target.value)} control={<Radio />} label="Not Playing" />
                                <FormControlLabel value="undecided" onClick={e=> props.updateStatus(player._id, e.target.value)} control={<Radio />} label="Undecided" />
                                </RadioGroup>
                            </FormControl>
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

export default PlayerStatus;

