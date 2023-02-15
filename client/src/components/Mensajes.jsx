import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Mensajes() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/messages")
            .then((response) => setMessages(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleToggleIsActive = (id, isActive) => {
        axios
            .put(`http://localhost:3001/messages/${id}`, { isActive: !isActive })
            .then(() => {
                const updatedMessages = messages.map((message) =>
                    message.id === id ? { ...message, isActive: !isActive } : message
                );
                setMessages(updatedMessages);
            })
            .catch((error) => console.log(error));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 150 },
        { field: "chanel", headerName: "Channel", width: 150 },
        { field: "data", headerName: "Data", width: 300 },
        {
            field: "isActive",
            headerName: "Status",
            width: 150,
            valueFormatter: ({ value }) => (value ? "Solved" : "To fix"),
            renderCell: (params) => (
                <Switch
                    checked={params.value}
                    onChange={() =>
                        handleToggleIsActive(params.row.id, params.row.isActive)
                    }
                    color="primary"
                />
            ),
        },
        {
            field: "fixStatus",
            headerName: "Fixed/Broken",
            width: 150,
            renderCell: (params) => {
                const isActive = params.row.isActive;
                return (
                    isActive ?
                        <CheckCircleIcon sx={{ color: "green" }} />
                        :
                        <CancelIcon sx={{ color: "red" }} />
                )
            }
        }

    ];

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                columns={columns}
                rows={messages}
                disableSelectionOnClick
                onCellClick={(params, event) => {
                    if (params.field === "isActive") {
                        handleToggleIsActive(params.row.id, params.row.isActive);
                    }
                }}
            />
        </div>
    );
}









// import { List, ListItem, Button } from "@mui/material";
// import { Box } from "@mui/system";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Mensajes() {
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         axios
//             .get("http://localhost:3001/messages")
//             .then((response) => setMessages(response.data))
//             .catch((error) => console.log(error));
//     }, []);

//     const handleToggleIsActive = (id, isActive) => {
//         axios
//             .put(`http://localhost:3001/messages/${id}`, { isActive: !isActive })
//             .then(() => {
//                 const updatedMessages = messages.map((message) =>
//                     message.id === id ? { ...message, isActive: !isActive } : message
//                 );
//                 setMessages(updatedMessages);
//             })
//             .catch((error) => console.log(error));
//     };

//     const handleChange = (id, isActive) => {
//         axios
//             .put(`http://localhost:3001/messages/${id}`, { isActive: !isActive })
//             .then(() => {
//                 const updatedMessages = messages.map((message) =>
//                     message.id === id ? { ...message, isActive: !isActive } : message
//                 );
//                 setMessages(updatedMessages);
//             })
//             .catch((error) => console.log(error));
//     };

//     return (
//         <Box
//             width="100vw"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//         >
//             {messages.length > 0 ? (
//                 <List
//                     style={{
//                         width: "80%",
//                         alignItems: "center",
//                         rowGap: "20px",
//                         backgroundColor: "lightblue",
//                         padding: "20px",
//                     }}
//                 >

//                     <ListItem
//                         sx={{
//                             width: "80%",
//                             display: "flex",
//                             justifyContent: "space-between",
//                             flexDirection: "row",
//                             fontWeight: "bold",
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "flex-start",
//                                 columnGap: "30px",
//                                 marginRight: "30px",

//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     width: "50px",
//                                     bgcolor: "red",
//                                     minWidth: "50px",
//                                 }}

//                             >
//                                 Canal
//                             </Box>
//                             <Box
//                                 sx={{
//                                     width: "50px",
//                                     bgcolor: "red",
//                                     minWidth: "50px",
//                                 }}
//                             >
//                                 Mensaje
//                             </Box>
//                         </Box>

//                         <Box>
//                             <Box>Estado</Box>
//                         </Box>
//                     </ListItem>

//                     {messages.map((message) => {
//                         const isActive = message.isActive;
//                         const id = message.id;
//                         const data = message.data;
//                         const chanel = message.chanel;

//                         return (
//                             <ListItem
//                                 key={id}
//                                 sx={{
//                                     width: "80%",
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     flexDirection: "row",
//                                 }}
//                             >
//                                 <Box
//                                     sx={{
//                                         display: "flex",
//                                         columnGap: "30px",
//                                         marginRight: "30px",
//                                     }}
//                                 >
//                                     <Box >{chanel}</Box>
//                                     <Box>{data}</Box>
//                                 </Box>

//                                 <Box>
//                                     <Button
//                                         variant="contained"
//                                         color={isActive ? "success" : "error"}
//                                         disabled
//                                         sx={{ width: "150px" }}
//                                         onClick={() => handleToggleIsActive(id, isActive)}
//                                     >
//                                         {isActive ? "Solucionado" : "Arreglar"}
//                                     </Button>
//                                 </Box>
//                             </ListItem>
//                         );
//                     })}
//                 </List>
//             ) : (
//                 "No hay nada"
//             )}
//         </Box>
//     );
// }










// import { ListGroup, ListGroupItem, Button } from "reactstrap";
// import { Box } from "@mui/material";
// import { useEffect, useState } from "react";
// import axios from "axios"

// import React from 'react'


// export default function Mensajes() {
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         axios
//             .get("http://localhost:3001/messages")
//             .then((response) => setMessages(response.data))
//             .catch((error) => console.log(error));
//     }, []);

//     const handleToggleIsActive = (id, isActive) => {
//         axios
//             .put(`http://localhost:3001/messages/${id}`, { isActive: !isActive })
//             .then(() => {
//                 const updatedMessages = messages.map((message) =>
//                     message.id === id ? { ...message, isActive: !isActive } : message
//                 );
//                 setMessages(updatedMessages);
//             })
//             .catch((error) => console.log(error));
//     };



//     const handleChange = (id, isActive) => {
//         axios
//             .put(`http://localhost:3001/messages/${id}`, { isActive: !isActive })
//             .then(() => {
//                 const updatedMessages = messages.map((message) =>
//                     message.id === id ? { ...message, isActive: !isActive } : message
//                 );
//                 setMessages(updatedMessages);
//             })
//             .catch((error) => console.log(error));
//     }


//     return (
//         <Box width="100vw" display="d-flex" flexDirection="column" alignItems="center" justifyContent="center">

//             {messages[0]
//                 ?
//                 <ListGroup
//                     style={{
//                         width: "80%",
//                         alignItems: "center",
//                         rowGap: "20px",
//                         backgroundColor: "lightblue",
//                         padding: "20px",

//                     }}
//                 >
//                     {messages.map((message) => {
//                         const isActive = message.isActive
//                         const id = message.id
//                         const data = message.data
//                         const chanel = message.chanel
//                         return (
//                             <ListGroupItem key={id}
//                                 style={{
//                                     width: "80%",
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     flexDirection: "row"
//                                 }}
//                             >
//                                 <Box display="d-flex" columnGap="30px" right="30px">
//                                     <Box>{chanel}</Box>
//                                     <Box>{data}</Box>
//                                 </Box>


//                                 <Box>
//                                     {/* <Switch
//                                         checked={isActive} // true if enabled, false if disabled
//                                         disabled={false} // true if disabled, false if enabled
//                                         onChange={() => handleChange(id, isActive)} // handler function for when the switch is toggled
//                                     /> */}

//                                     <Button
//                                         color={isActive ? "success" : "danger"}
//                                         disabled={true}
//                                         style={{
//                                             width: "150px"
//                                         }}
//                                     // onClick={() => handleToggleIsActive(id, isActive)}
//                                     >
//                                         {isActive ? "Solucionado" : "Arreglar"}
//                                     </Button>
//                                 </Box>

//                             </ListGroupItem>
//                         )
//                     }
//                     )}
//                 </ListGroup>
//                 :
//                 "No hay nada"
//             }

//         </Box>
//     )
// }





