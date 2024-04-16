---
date: "2021-11-25"
slug: radio
thumbnail: /assets/getting-started.jpeg
title: Radio
description: Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
category: Inputs
---

## Import

```
import { Radio, RadioGroup } from "@actionishope/shelley/Radio";
```

## Adobe hooks

Radio and RadioGroup are built using the Adobe aria [useRadio](https://react-spectrum.adobe.com/react-aria/useRadio.html) and [useRadioGroup](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html) hooks.

## Radio usage

```jsx{live:true}
<RadioGroup label="Favorite sport">
  <Radio value="rugby">Rugby</Radio>
  <Radio value="cricket">Cricket</Radio>
  <Radio value="fooball">Football</Radio>
</RadioGroup>
```

> Note: A Radio cannot be used outside of a RadioGroup.

### Value

An initial, uncontrolled value can be provided to the RadioGroup using the `defaultValue` prop, which accepts a value corresponding with the `value` prop of each Radio.

Alternatively, a controlled `value` can be provided using the value prop, which accepts a value corresponding with the value prop of each Radio. The `onChange` event is fired when the user selects a radio.

```tsx{live:true}
() => {
  const [selected, setSelected] = React.useState("wizard");
  return (
    <>
      <RadioGroup label="Are you a wizard?" defaultValue="yes">
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>

      <RadioGroup
        label="Favorite avatar (controlled)"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    </>
  );
};
```

### Size

Use the `size` prop to adjust the size of the checkmark.

```jsx{live:true}
<RadioGroup label="Sizes" defaultValue={1}>
  <Radio size={1} value={1}>1</Radio>
  <Radio size={2} value={2}>2</Radio>
  <Radio size={3} value={3}>3</Radio>
  <Radio size={4} value={4}>4</Radio>
  <Radio size={5} value={5}>5</Radio>
  <Radio size={6} value={6}>6</Radio>
</>
```

### Events

RadioGroup accepts an `onChange` prop, which is triggered when a user changes the selected value. The example below uses `onChange` to log how the user is interacting with the component.


```jsx{live:true}
() => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <RadioGroup
        label="Favorite sport"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="rugby">Rugby</Radio>
        <Radio value="cricket">Cricket</Radio>
        <Radio value="fooball">Football</Radio>
      </RadioGroup>
      <P vol={1}>You have selected: {selected}</P>
    </>
  );
}
```

### Validation

Implement your own validation logic in your app and set the `isInvalid` prop on the Checkbox and `errorMessage`.


```jsx{live:true}
<RadioGroup 
  label="Cats or Dogs?" 
  errorMessage="You must answer, 'both' is not an option, you will be judged!" 
  isInvalid
>
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
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

## CheckboxGroup usage

CheckboxGroup accepts multiple Checkbox elements as children. Each Checkbox represents an option that can be selected, labeled by its children.

```jsx{live:true}
<CheckboxGroup label="Favorite sports">
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
        label="Favorite sports (uncontrolled)"
        defaultValue={["cricket", "rugby"]}
      >
        <Checkbox value="rugby">Rugby</Checkbox>
        <Checkbox value="cricket">Cricket</Checkbox>
        <Checkbox value="fooball">Football</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Favorite sports (controlled)"
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
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="football">Football</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <P vol={1} className={spacing.mt2}>
        You have selected: {selected.join(", ")}
      </P>
    </>
  );
}
```



```jsx{live:true}
<CheckboxGroup label="Favorite sports" vol={1}>
  <Switch value="rugby">Rugby</Switch>
  <Switch value="cricket">Cricket</Switch>
  <Switch value="fooball">Football</Switch>
</CheckboxGroup>
```
