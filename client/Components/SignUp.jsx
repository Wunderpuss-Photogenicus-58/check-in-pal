import React from "react";

import { TextField, Button, FormControl, FormLabel } from "@mui/material";


const SignUp = () => {


  return (
    <div className="sign-up">
      <FormControl>
          <FormLabel>Enter Name</FormLabel>
          <TextField></TextField>
          <Button>Submit</Button>
      </FormControl>
    </div>
  )

}