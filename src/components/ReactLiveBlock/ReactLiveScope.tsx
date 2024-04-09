import React from "react";
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import { classes as spacing } from "@actionishope/shelley/styles/spacing.st.css";

import { Radio, RadioGroup } from "@actionishope/shelley/Radio";
import { Checkbox, CheckboxGroup } from "@actionishope/shelley/Checkbox";
import { TextField } from "@actionishope/shelley/TextField";
import { Button, ButtonGroup } from "@actionishope/shelley/Button";
import { Switch } from "@actionishope/shelley/Switch";
import { Icon } from "@actionishope/shelley/Icon";
import { DialogTrigger, Dialog } from "@actionishope/shelley/Dialog";
import { P, H2 } from "@actionishope/shelley/Text";
import PreviewIcon from "@actionishope/shelley/icons/Preview";
import AngleRightIcon from "@actionishope/shelley/icons/AngleRight";
// import Lorem from 'react-lorem-component'
// import * as Loaders from 'react-spinners'
// import * as ReactTable from 'react-table'

const ReactLiveScope = {
  React,
  ...React,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonGroup,
  Icon,
  DialogTrigger,
  Dialog,
  TextField,
  dialog,
  P,
  H2,
  Switch,
  spacing,
  PreviewIcon,
  AngleRightIcon,
};

export default ReactLiveScope;
