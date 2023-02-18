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

  const postMessages = async (body) => {
    await axios.post('/messages', body)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      chanel: textInput,
      data: selectedOption
    }
    postMessages(body)
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