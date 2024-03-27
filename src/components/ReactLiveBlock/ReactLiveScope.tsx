import React from "react";
// import FocusLock from "react-focus-lock";
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";

import { Radio, RadioGroup } from "@actionishope/shelley/Radio";
import { Button, ButtonGroup } from "@actionishope/shelley/Button";
import { Icon } from "@actionishope/shelley/Icon";
import { DialogTrigger, Dialog } from "@actionishope/shelley/Dialog";
import { P, H2 } from "@actionishope/shelley/Text";
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
