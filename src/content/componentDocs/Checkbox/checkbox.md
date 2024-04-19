---
slug: checkbox
thumbnail: /assets/getting-started.jpeg
title: Checkbox
description: Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.
category: Inputs
---

## Import

```
import { Checkbox, CheckboxGroup } from "@actionishope/shelley/Checkbox";
```

- **Checkbox**: The checkbox supporting label positioning and checkmark size.
- **CheckboxGroup**: Provides a `Field` wrapper around multiple checkboxes and manages the checked state.

## Adobe hooks

The checkbox components are built using the Adobe aria [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) and [useCheckboxGroup](https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html) hooks.

## Usage

```jsx{live:true}
<Checkbox defaultSelected>Subscribe</Checkbox>
```

### Value

Checkboxes are not selected by default. The `defaultSelected` prop can be used to set the default state (uncontrolled).

Alternatively, the `isSelected` prop can be used to make the selected state controlled.


```jsx{live:true}
() => {
  const [selected, setSelected] = React.useState(true);
  return (
    <>
      <Checkbox defaultSelected>
        Subscribe (uncontrolled)
      </Checkbox>
      <Checkbox isSelected={selected} onChange={setSelected}>
        Subscribe (controlled)
      </Checkbox>
    </>
  );
};
```

### Indeterminate

A Checkbox can be in an indeterminate state, controlled using the `isIndeterminate` prop. This overrides the appearance of the Checkbox, whether selection is controlled or uncontrolled. The Checkbox will visually remain indeterminate until the `isIndeterminate` prop is set to `false`, regardless of user interaction.

```jsx{live:true}
<Checkbox isIndeterminate>Mixed</Checkbox>
```

### Size

Use the `size` prop to adjust the size of the checkmark.

```jsx{live:true}
<>
  <Checkbox size={1}>1</Checkbox>
  <Checkbox size={2}>2</Checkbox>
  <Checkbox size={3}>3</Checkbox>
  <Checkbox size={4}>4</Checkbox>
  <Checkbox size={5}>5</Checkbox>
  <Checkbox size={6}>6</Checkbox>
</>
```

### Events

Checkboxes accept a user defined `onChange` prop, triggered whenever the Checkbox is clicked. The example below uses `onChange` to alert the user to changes in the checkbox's state.


```jsx{live:true}
() => {
  const [selected, setSelection] = React.useState(false);
  return (
    <CheckboxGroup 
      description={`You have ${selected ? "accepted" : "not accepted"}`}
      vol={3}
    >
      <Checkbox isSelected={selected} onChange={setSelection}>
        Accept terms
      </Checkbox>
    </CheckboxGroup>
  );
}
```

### Validation

Implement your own validation logic in your app and set the `isInvalid` prop on the Checkbox.


```jsx{live:true}
<Checkbox isInvalid>
  I accept the terms and conditions
</Checkbox>
```

### Disabled

Use the `isDisabled` prop to to set the Checkbox to disabled.

```jsx{live:true}
<Checkbox isDisabled>
  I accept the terms and conditions
</Checkbox>
```

### Readonly

The `isReadOnly` prop makes the selection immutable. Unlike isDisabled, the Checkbox remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```jsx{live:true}
<Checkbox isSelected isReadOnly>
  I accept the terms and conditions
</Checkbox>
```

### Accessibility

In certain cases a visible label isn't desirable (e.g a checkbox used to select a table row) but a label must be provided for accessibility anyway. You can either use the `visuallyHideLabel` prop to hide the one provided or use `aria-label`.

### Internationalisation

To internationalise a Checkbox, a localised label should be passed to the children or aria-label prop. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the checkbox is automatically flipped.
