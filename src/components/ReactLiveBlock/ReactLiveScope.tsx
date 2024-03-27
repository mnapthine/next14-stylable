import React from "react";
import FocusLock from "react-focus-lock";
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import {
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  Icon,
  DialogTrigger,
  Dialog,
  P,
  H2,
} from "@actionishope/shelley";
// import Lorem from 'react-lorem-component'
// import * as Loaders from 'react-spinners'
// import * as ReactTable from 'react-table'

const ReactLiveScope = {
  React,
  ...React,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  Icon,
  DialogTrigger,
  Dialog,
  dialog,
  P,
  H2,
};

export default ReactLiveScope;
