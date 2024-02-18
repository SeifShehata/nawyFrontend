'use client'
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSearchParams } from "next/navigation";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function Details() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
  
    const [data, setData] = React.useState(null); // Initialize with null
  
    React.useEffect(() => {
      axios.get(`http://localhost:3000/getapartment/${id}`)
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [id]);
    console.log(data)
    const appDetails = data ? (
      <div className='details-main'>
        <div className='details-title'>{data.name}</div>
        <div className='details-imgs'>
          {data.imgUrls?.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} className={`image-${index+1}`} />
          ))}
        </div>
        <div className='details-description'>
          <h3>{data.description}</h3>
          <p>{data.guests} guest/s - {data.bedrooms} bedroom/s</p>
        </div>
      </div>
    ) : null;
            
    function createData(name, value) {
      return { name, value };
    }
    
    const rows = data
    ? [
        createData('Additional Fees', data.additionalFees),
        createData('Address', data.address),
        createData('Application Fee', data.applicationFee),
        createData('Bedrooms', data.bedrooms),
        createData('City', data.city),
        createData('Deposit Fee', data.depositFee),
        createData('Description', data.description),
        createData('Guests', data.guests),
        createData('Lease Terms', data.leaseTerms),
        createData('Name', data.name),
        createData('Parking Details', data.parkingDetails),
        createData('Price', data.price),
      ]
    : []; //has to be likethat because tis initially null
    
    return (
      <div >
      {appDetails}
      <div className='details-main'>
      <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Property</StyledTableCell>
              <StyledTableCell align="right">Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.value}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
    );
  }
  
  export default Details;