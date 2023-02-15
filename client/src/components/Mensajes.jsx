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
            .get("localhost:3001/messages")
            .then((response) => setMessages(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleToggleIsActive = (id, isActive) => {
        axios
            .put(`localhost:3001/messages/${id}`, { isActive: !isActive })
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
        <>
            {messages[0]
                ?
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
                :
                <>no hay mensajes todavia</>

            }
        </>

    );
}
