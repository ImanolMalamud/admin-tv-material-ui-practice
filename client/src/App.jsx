import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import FormExample from './components/FormExample';
import Mensajes from './components/Mensajes';


const theme = createTheme({
  palette: {
    primary: {
      main: '#5C6BC0'
    }
  }
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    rowGap: '15px'
  },
  form: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    minWidth: '50%',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'
  },
  heading: {
    textAlign: 'center',
    color: '#5C6BC0'
  },
  button: {
    height: '80%',
    backgroundColor: '#5C6BC0',
    '&:hover': {
      backgroundColor: '#3949AB'
    }
  },
  input: {
    width: '100%'
  },
  label: {
    textAlign: 'center'
  },
  option: {
    width: '100%',
    textAlign: 'center'
  },
  messages: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    minWidth: '80%',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  status: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '10px'
  },
  fixed: {
    backgroundColor: '#66BB6A'
  },
  broken: {
    backgroundColor: '#EF5350'
  }
};



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.container}>
        <Box sx={styles.form}>
          <FormExample
            styles={styles}
          />
        </Box>
        <Box sx={styles.messages}>
          <Mensajes
            styles={styles}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;






// import FormExample from "./Componentes/FormExample"
// import { Box } from "@mui/material";
// import Mensajes from "./Componentes/Mensajes";

// function App() {

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       margin="20px"
//       rowGap="15px"
//       width="100vw"
//     >

//       <FormExample />
//       <Mensajes />
//     </Box >
//   )

// }

// export default App
