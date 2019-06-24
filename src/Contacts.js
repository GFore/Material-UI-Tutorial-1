import React from "react";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  // TextField,
  Typography
} from "@material-ui/core";

function Contacts() {
  return (
    <Grid container justify="center" direction="column" alignItems="center" style={{ margin: 20, padding: 20 }} >
      <Typography variant="h4">Contact Form</Typography>
      <form style={{ width: "50%" }}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="message">Message</InputLabel>
          <Input id="message" multiline rows={10} />
        </FormControl>

        <Button variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </Grid>
  );
}

export default Contacts;