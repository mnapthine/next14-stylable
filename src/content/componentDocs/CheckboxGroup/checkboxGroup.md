---
slug: checkbox-group
thumbnail: /assets/getting-started.jpeg
title: Checkbox Group
description: CheckboxGroup accepts multiple Checkbox elements as children. Each Checkbox represents an option that can be selected, labeled by its children.
category: Inputs
---

## Import

```
import { Checkbox, CheckboxGroup } from "@actionishope/shelley/Checkbox";
```

## Adobe hooks

The checkbox components are built using the Adobe aria [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) and [useCheckboxGroup](https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html) hooks.


## Usage

CheckboxGroup accepts multiple Checkbox elements as children. Each Checkbox represents an option that can be selected, labeled by its children.

```jsx{live:true}
<CheckboxGroup label="Activities">
  <Checkbox value="rugby">Rugby</Checkbox>
  <Checkbox value="cricket">Cricket</Checkbox>
  <Checkbox value="fooball">Football</Checkbox>
</CheckboxGroup>
```

### Value

CheckboxGroup supports selecting zero or more items. An initial, uncontrolled value can be provided to the CheckboxGroup using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop. 

Both of these props accept an array of selected items, which map to the `value` prop on each item.

```jsx{live:true}
() => {
  const [selected, setSelected] = React.useState(["cricket", "rugby"]);
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <CheckboxGroup
        label="Activities (uncontrolled)"
        defaultValue={["cricket", "rugby"]}
      >
        <Checkbox value="rugby">Rugby</Checkbox>
        <Checkbox value="cricket">Cricket</Checkbox>
        <Checkbox value="fooball">Football</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Activities (controlled)"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="rugby">Rugby</Checkbox>
        <Checkbox value="cricket">Cricket</Checkbox>
        <Checkbox value="fooball">Football</Checkbox>
      </CheckboxGroup>
    </div>
  );
}
```

### Events

CheckboxGroup accepts a user defined `onChange` prop, triggered whenever a contained checkbox is clicked.

```tsx{live:true}
() => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <>
      <CheckboxGroup
        label="Activities"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="rugby">Rugby</Checkbox>
        <Checkbox value="cricket">Cricket</Checkbox>
        <Checkbox value="fooball">Football</Checkbox>
      </CheckboxGroup>
      <P vol={1} className={spacing.mt2}>
        You have selected: {selected.join(", ")}
      </P>
    </>
  );
}
```

### Validation

Checkboxes can display a validation state to communicate to the user if the current value is invalid. Implement your own validation logic in your app and set the `isInvalid` prop.

```jsx{live:true}
<CheckboxGroup 
  label="Activities" 
  description="Pick at least one activity to join."
  errorMessage="You need to pick something!" 
  isInvalid // Toggle between eroor and description
>
  <Checkbox value="rugby">Rugby</Checkbox>
  <Checkbox value="cricket">Cricket</Checkbox>
  <Checkbox value="fooball">Football</Checkbox>
</CheckboxGroup>
```

or combine with `isInvalid` on the individual checkboxes:

```jsx{live:true}
<CheckboxGroup 
  label="Activities" 
  description="Pick at least one activity to join"
  errorMessage="You need to pick something!" 
  isInvalid // Toggle between eroor and description
>
  <Checkbox value="rugby" isInvalid>Rugby</Checkbox>
  <Checkbox value="cricket" isInvalid>Cricket</Checkbox>
  <Checkbox value="fooball" isInvalid>Football</Checkbox>
</CheckboxGroup>
```

### Disabled

The entire CheckboxGroup can be disabled with the `isDisabled` prop.

```jsx{live:true}
<CheckboxGroup label="Activities" isDisabled>
  <Checkbox value="rugby">Rugby</Checkbox>
  <Checkbox value="cricket">Cricket</Checkbox>
  <Checkbox value="fooball">Football</Checkbox>
</CheckboxGroup>
```

To disable an individual checkbox, pass `isDisabled` to the Checkbox instead.

### Read only

The `isReadOnly` prop makes the selection immutable. Unlike isDisabled, the Checkbox remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```jsx{live:true}
<CheckboxGroup label="Activities" defaultValue={["cricket"]} isReadOnly>
  <Checkbox value="rugby">Rugby</Checkbox>
  <Checkbox value="cricket">Cricket</Checkbox>
  <Checkbox value="fooball">Football</Checkbox>
</CheckboxGroup>
```

### Volume and sizes

Use the `vol` on the CheckboxGroup prop to adjust the text and `size` on the Checkboxes to adjust the size of the input control.


```jsx{live:true}
<CheckboxGroup 
  label="Group label" 
  vol={4} // Supports values 1-6
  >
  <Checkbox size={1} value="1">Size one</Checkbox>
  <Checkbox size={2} value="2">Size two</Checkbox>
  <Checkbox size={3} value="3">Size three</Checkbox>
  <Checkbox size={4} value="4">Size four</Checkbox>
  <Checkbox size={5} value="5">Size five</Checkbox>
  <Checkbox size={6} value="6">Size size</Checkbox>
</CheckboxGroup>
```
