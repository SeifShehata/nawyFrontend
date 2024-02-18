// import React from 'react'
// import Mui from "@mui/material"
// import axios from 'axios';
// const [data, setData] = React.useState([]);

// React.useEffect(()=>{
// axios.get("/apartments")
// .then(res=>{
//     setData(res.data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// },[])
// const cardElements=data.map((card)=>{
//     return(
//         <Mui.Card key={item.id} sx={{ maxWidth: 300, margin: 2 }}>
//         <Mui.CardContent>
//           <Mui.Typography variant="h6">{item.name}</Mui.Typography>
//           <Mui.Typography variant="body2">{item.description}</Mui.Typography>
//           <Mui.Typography variant="body2">{item.address}, {item.city}</Mui.Typography>
//           <Mui.Typography variant="body2">Price: ${item.price}</Mui.Typography>
//         </Mui.CardContent>
//       </Mui.Card>
//     )
// })
// function Card(){
//     return(
//        {cardElements}
//     )
// }
// export default Card;