// @ts-nocheck

// ** React Import
import { forwardRef } from "react";

// ** MUI Imports
import { styled } from "@mui/material/styles";
// import TextField from '@mui/material/TextField'
import { Input } from "@/components/ui/input";

const CustomTextField = forwardRef((props, ref) => {
  // ** Props
  const { size = "small", InputLabelProps, ...rest } = props;

  return (
    <Input
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      autoComplete="off"
    />
  );
});

export default CustomTextField;
