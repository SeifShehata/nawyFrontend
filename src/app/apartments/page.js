'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';

function Apartments(){

  // State to store the fetched data
  const [data, setData] = React.useState([]);

  // State to manage the page number for infinite scrolling
  const [pageNumber, setPageNumber] = useState(1);

  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true); // New state to track if there's more data


  // useRef to keep track of the last item in the current set of data
  const observer = useRef();

  // Function to handle the intersection observer for infinite scrolling
  const lastApartmentRef = (node) => {
    if (loading || !hasMore) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Increment the page number when the last item is visible
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  // Effect to fetch data when the page number changes
  useEffect(() => {
    // Set loading to true when starting to fetch new data
    setLoading(true);
  
    // Fetch data from the server using the current page number
    axios.get(`http://localhost:3000/apartments?page=${pageNumber}`)
      .then(res => {
        // Update the state with the newly fetched data
        setData((prevData) => [...prevData, ...res.data.data]); // Access the 'data' property
  
        // Set hasMore to false if there's no more data
        setHasMore(res.data.data.length > 0);
  
        // Set loading to false when data is successfully fetched
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Set loading to false if there is an error while fetching data
        setLoading(false);
      });
  }, [pageNumber]);
  // Map through the data to create individual card elements
  const cardElements = data.map((card, index) => {
    // Check if it's the last item in the current set of data
    const isLastItem = index === data.length - 1;

    return (
      <Grid key={card.id} item xs={12} sm={6} md={4} sx={{ width: "100%", height: "100%", padding: 2 }}>
        <Link style={{ textDecoration: 'none' }} href={`apartments/details/?id=${card._id}`} passHref>
          <CardActionArea component="a" ref={isLastItem ? lastApartmentRef : null}
            sx={{
              margin: 0,
              height: '100%',
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'background 0.3s ease',
              border: "1px solid grey",
              '&:hover': {
                background: '#f0f0f0',
              },
            }}>
            <Card sx={{ width: "100%", margin: 0 }}>
              <CardMedia
                component="img"
                height="200"
                sx={{
                  '&:hover': {
                    background: '#f0f0f0',
                  },
                }}
                image={card.imgUrls[0]}
              />
              <CardContent>
                <Typography variant="h6">{card.name}</Typography>
                <Typography variant="body2">{card.description}</Typography>
                <Typography variant="body2">{card.address}, {card.city}</Typography>
                <Typography variant="body2">Price: {card.price}EGP</Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Link>
      </Grid>
    );
  });

  // Render the component with the list of cards and loading indicator
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 2 }}>
      <Grid container spacing={2}>
        {cardElements}
      </Grid>
    
    </Box>
  );
}

export default Apartments;
