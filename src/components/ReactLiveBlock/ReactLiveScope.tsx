import React from "react";
// Shelley @todo switch to dynamic imports
import { Button, ButtonGroup } from "@actionishope/shelley/Button";
import { Checkbox, CheckboxGroup } from "@actionishope/shelley/Checkbox";
import { DialogTrigger, Dialog } from "@actionishope/shelley/Dialog";
import { Icon } from "@actionishope/shelley/Icon";
import { Popup } from "@actionishope/shelley/Popup";
import { Portal } from "@actionishope/shelley/Portal";
import { Radio, RadioGroup } from "@actionishope/shelley/Radio";
import { Switch } from "@actionishope/shelley/Switch";
import { Text, P, H2 } from "@actionishope/shelley/Text";
// External
import { FocusOn } from "react-focus-on";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { useOverlayTrigger } from "react-aria";
// Icons @todo: swap for react-icons
import PreviewIcon from "@actionishope/shelley/icons/Preview";
import AngleRightIcon from "@actionishope/shelley/icons/AngleRight";
// Classes
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import { classes as spacing } from "@actionishope/shelley/styles/spacing.st.css";

const ReactLiveScope = {
  React,
  ...React,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  DialogTrigger,
  Dialog,
  Icon,
  Switch,
  Text,
  P,
  H2,
  Popup,
  Portal,
  Radio,
  RadioGroup,
  // External
  FocusOn,
  useOverlayTriggerState, // popup
  useOverlayTrigger, // popup
  //Icons - @todo: swap for react-icons
  PreviewIcon,
  AngleRightIcon,
  // style classes
  dialog,
  spacing,
};

export default ReactLiveScope;
