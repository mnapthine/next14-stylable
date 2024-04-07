---
slug: text-field
title: TextField
description: Allows our wonderful users to tell us something interesting by inputting some text into a little box.
category: Inputs
import: import { TextField } from "@actionishope/shelley";
---

## Import

```
import { TextField } from "@actionishope/shelley/TextField"
```

## Adobe hooks

The TextField component is built using the Adobe [useTextField hook](https://react-spectrum.adobe.com/react-aria/useTextField.html).

## Usage

```jsx{live:true}
<TextField label="Name" />
```

### Value

A TextField's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

```jsx{live:true}
() => {
  const [value, setValue] = React.useState("me@email.com");

  return (
    <div style={{
      display: "grid",
      gap: "30px"
    }}>
      <TextField
        label="Email (Uncontrolled)"
        defaultValue="me@email.com"
      />

      <TextField
        label="Email (Controlled)"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
```

### Events

TextField accepts an `onChange` prop which is triggered whenever the value is edited by the user.

TextField is intrincically either an input or a textarea so all usual events are supported if not documented in the props tables.

The example below uses `onChange` to update a separate pre element with the same text entered into the TextField.

```jsx{live:true}
() => {
  const [text, setText] = React.useState("");

  return (
    <>
      <TextField label="Your text" onChange={setText}  />
      <P vol={1} className={spacing.mt2}>Mirrored text: {text}</P>
    </>
  );
};
```
