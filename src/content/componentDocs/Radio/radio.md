---
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
<RadioGroup label="Activities">
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

### Events

RadioGroup accepts an `onChange` prop, which is triggered when a user changes the selected value. The example below uses `onChange` to log how the user is interacting with the component.


```jsx{live:true}
() => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <RadioGroup
        label="Activities"
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

The entire RadioGroup can be disabled with the `isDisabled` prop.

```jsx{live:true}
<RadioGroup label="Activities" isDisabled>
  <Radio value="rugby">Rugby</Radio>
  <Radio value="cricket">Cricket</Radio>
  <Radio value="fooball">Football</Radio>
</RadioGroup>
```

To disable an individual radio, pass isDisabled to the Radio instead.

```jsx{live:true}
<RadioGroup label="Activities">
  <Radio value="rugby" isDisabled>Rugby</Radio>
  <Radio value="cricket">Cricket</Radio>
  <Radio value="fooball">Football</Radio>
</RadioGroup>
```

### Readonly

The `isReadOnly` prop makes the selection immutable. Unlike isDisabled, the RadioGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.


```jsx{live:true}
<RadioGroup label="Activities" isReadOnly>
  <Radio value="rugby">Rugby</Radio>
  <Radio value="cricket">Cricket</Radio>
  <Radio value="fooball">Football</Radio>
</RadioGroup>
```

### Volume and sizes

Use the `vol` on the RadioGroup prop to adjust the text and `size` on the Radios to adjust the size of the input control.


```jsx{live:true}
<RadioGroup 
  label="Group label" 
  vol={4} // Supports values 1-6
  defaultValue="s1"
  >
  <Radio size={1} value="s1">Size one</Radio>
  <Radio size={2} value="s2">Size two</Radio>
  <Radio size={3} value="s3">Size three</Radio>
  <Radio size={4} value="s4">Size four</Radio>
  <Radio size={5} value="s5">Size five</Radio>
  <Radio size={6} value="s6">Size size</Radio>
</RadioGroup>
```

### Accessibility

If a visible label isn't specified for a RadioGroup, an `aria-label` must be provided for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

In certain cases we might want an icon in place of a visible label but a label must be provided for accessibility anyway. You can use `aria-label` or ensure a label exists alongside your icon inside a `VisuallyHidden` component.

```jsx{live:true}
<RadioGroup label="Preview" orientation="horizontal">
  <Radio 
    inputPosition="bottom" 
    value="preview1" 
    aria-label="Preview"
  >
    <PreviewIcon />
  </Radio>
  {/* or */}
  <Radio 
    inputPosition="bottom"
    value="preview2"
  >
    <VisuallyHidden>Preview</VisuallyHidden>
    <PreviewIcon />
  </Radio>
</RadioGroup>
```

### Internationalisation

To internationalise a RadioGroup, a localised string should be passed to the label prop and as the child content of the Radio elements. For languages that are read right-to-left (e.g. Hebrew and Arabic), the layout of the checkbox is automatically flipped.
