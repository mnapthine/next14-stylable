---
slug: text-field
title: TextField
description: Allows our wonderful users to tell us something interesting by inputting some text into a little box.
category: Inputs
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

### Type and rows

Standard text based input types supported (password, number etc) with the option to choose `textarea` and `rows` to define the number of rows to start with.

```jsx{live:true}
<div style={{
  display: "grid",
  gap: "30px"
}}>
  <TextField type="password" label="Password" />
  <TextField type="textarea" label="Textarea" />
  <TextField type="textarea" label="Textarea" rows={1} />
  <TextField type="textarea" label="Textarea" rows={4} />
</div>
```

### Input Adornments

The main way is with an `InputAdornment`. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.

```jsx{live:true}
<TextField label="Amount" startAdornment="$" />
```

### Disabled

A text field in a `isDisabled` state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.

```jsx{live:true}
<TextField label="Label" defaultValue="Disabled" isDisabled />
```

### Readonly

The `isReadOnly` boolean prop makes the TextField's text content immutable. Unlike `disabled`, the TextField remains focusable and the contents can still be copied. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```jsx{live:true}
<TextField label="Label" defaultValue="Read only" isReadOnly />
```

### Help Text

Both a description and an error message can be supplied to a TextField. The description is always visible unless an error message is provided and `isInvalid` is set. The error message can be used to help the user fix their input quickly and should be specific to the detected error. 

All strings should be localised.

```jsx{live:true}
() => {
  const [value, setValue] = React.useState("0");
  const isValid = React.useMemo(() => /^\d$/.test(value), [value]);
  return (
    <TextField
      isInvalid={!isValid}
      value={value}
      onChange={setValue}
      label="Favorite number"
      maxLength={1}
      description="Enter a single digit number."
      errorMessage={
        value === ""
          ? "Empty input not allowed."
          : "Single digit numbers are 0-9."
      }
    />
  );
};
```

### Variants

TextField is a complete form control including a label, input, and help text. It comes with three variants:

- `outlined` (default)
- `filled`
- `quiet`

```jsx{live:true}
<div style={{
  display: "grid",
  gap: "30px"
}}>
  <TextField variant="outlined" label="Outlined" />
  <TextField variant="filled" label="Filled" />
  <TextField variant="quiet" label="Quiet" placeholder="Shhhhhh" rows={1} />
</div>
```

If you want a clean base to create a new variant from (styled via className) then set variant to `false`.

### Volume

Change the size of an TextField via the `vol` prop.

```jsx{live:true}
<div style={{
  display: "grid",
  gap: "30px"
}}>
  <TextField
    label="Name"
    vol={1}
    placeholder="volume 1"
  />
  <TextField
    label="Name"
    vol={6}
    placeholder="volume 6"
  />
</div>
```

### Label position

Set the position of the label to either `side`, `top` (default), `over`.

```jsx{live:true}
<div style={{
  display: "grid",
  gap: "30px"
}}>
  <TextField label="Side" labelPosition="side"/>
  <TextField label="Top" labelPosition="top"/>
  <TextField label="Over" labelPosition="over"/>
</div>
```
