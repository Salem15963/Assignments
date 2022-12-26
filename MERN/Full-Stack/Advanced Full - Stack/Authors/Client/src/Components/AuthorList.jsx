// import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import React from 'react'
import './Css/AuthorList.css'
// import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AuthorList = (props) => {
    const { removeFromDom , authors} = props;
    
    
    return (
        <>
        <div>
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className='t-head'>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {authors.map((author, idx) => (
                        <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Link to={"/authors/" + author._id}>
                                {author.name} 
                            </Link>
                        </TableCell>
                        <TableCell align="right" className='tbottom'>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                            <Link to={"/authors/" + author._id + "/edit"}>|Edit</Link>
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
    
export default AuthorList;

