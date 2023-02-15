import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function LoginForm({ onAuthenticate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAuthenticate({ username, password });
    };

    return (<>hola</>)

    //     return (
    //         <Box
    //             display="flex"
    //             flexDirection="column"
    //             alignItems="center"
    //             justifyContent="center"
    //             margin="20px"
    //             rowGap="15px"
    //             width="100vw"
    //         >
    //             <form onSubmit={handleSubmit}>
    //                 <TextField
    //                     label="Username"
    //                     value={username}
    //                     onChange={handleUsernameChange}
    //                 />
    //                 <TextField
    //                     label="Password"
    //                     type="password"
    //                     value={password}
    //                     onChange={handlePasswordChange}
    //                 />
    //                 <Button type="submit" variant="contained">
    //                     Login
    //                 </Button>
    //             </form>
    //         </Box>
    //     );
}

export default LoginForm;