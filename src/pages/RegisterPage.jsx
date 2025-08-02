import React from "react";
import Header from "../components/Header";
import { Button, Stack } from "@mui/material";
import DenseTable from "../components/MyTable";

const RegisterPage = () => {
  return (
    <div>
      <Header />
      RegisterPage
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

        <DenseTable />

    </div>
  );
};

export default RegisterPage;
