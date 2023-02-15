import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box
} from '@mui/material';

export default function FormExample() {
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      chanel: textInput,
      data: selectedOption
    }
    axios.post('http://localhost:3001/messages', body)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'lightgrey',
        p: 2,
        minWidth: '50%'
      }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ width: '100%', mb: 2 }}>
        <InputLabel id="selectOption-label">Cual es el problema ?</InputLabel>
        <Select
          labelId="selectOption-label"
          id="selectOption"
          value={selectedOption}
          label="Cual es el problema ?"
          onChange={handleOptionChange}
        >

          <MenuItem value="A veces deja de funcionar.">A veces deja de funcionar.</MenuItem>
          <MenuItem value="No funciona nunca.">No funciona nunca.</MenuItem>
          <MenuItem value="Se ve muy mal.">Se ve muy mal.</MenuItem>
          <MenuItem value="El nombre del canal está mal puesto.">El nombre del canal está mal puesto.</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="textInput"
        label="Canal"
        value={textInput}
        onChange={handleTextChange}
        sx={{ width: '50%', mb: 2 }}
      />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </Box>
  );
}










// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

// export default function FormExample() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [textInput, setTextInput] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.options[event.target.selectedIndex].text);
//   };

//   const handleTextChange = (event) => {
//     setTextInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const body = {
//       chanel: textInput,
//       data: selectedOption
//     }
//     axios.post('http://localhost:3001/messages', body)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .then(() => {
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Form onSubmit={handleSubmit}
//       style={{
//         backgroundColor: "lightgrey",
//         padding: "20px",
//         minWidth: "50%"
//       }}
//     >
//       <Row xs={12}>
//         <h1 style={{ textAlign: "center" }}>EJEMPLO</h1>
//       </Row>
//       <Row>
//         <Col xs={8}>
//           <FormGroup >
//             <Label for="selectOption"
//               style={{
//                 width: "100%",
//                 textAlign: "center"
//               }}
//             >
//               Cual es el problema ?
//             </Label>
//             <Input type="select" name="selectOption" id="selectOption" value={selectedOption} onChange={handleOptionChange}>
//               <option value="">-- Please select an option --</option>
//               <option value="option1">A veces deja de funcionar.</option>
//               <option value="option1">No funciona nunca.</option>
//               <option value="option2">Se ve muy mal.</option>
//               <option value="option3">El nombre del canal está mal puesto.</option>
//             </Input>
//           </FormGroup>

//         </Col>
//         <Col xs={2} >
//           <FormGroup
//             style={{
//               width: "80%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center"
//             }}>
//             <Col>
//               <Label for="textInput"
//                 style={{
//                   textAlign: "center"
//                 }}
//               >Canal:
//               </Label>
//             </Col>

//             <Input type="text" name="textInput" id="textInput" value={textInput} onChange={handleTextChange}
//               style={{
//                 width: "50px"
//               }}
//             />
//           </FormGroup>
//         </Col>
//         <Col xs={2}

//         >
//           <Button type="submit" color="primary"
//             style={{
//               height: "80%"
//             }}
//           >Submit</Button>
//         </Col>
//       </Row>



//       <Row>


//       </Row>

//     </Form >
//   );
// }
