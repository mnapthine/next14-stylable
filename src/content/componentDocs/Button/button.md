---
date: "2021-11-25"
slug: button
thumbnail: /assets/getting-started.jpeg
title: Button
description: Button is a foundational component that allows users to execute actions such as submitting forms, starting processes, or changing settings, translating user intentions into actions within an application. 🚀🎉
category: Buttons
import: import { Button } from "@actionishope/shelley";
---

## Import

```
import { Button, ButtonGroup } from "@actionishope/shelley/Button"
```

- **Button**: The button supporting various visual states and icons.
- **ButtonGroup**: Used to group related buttons.

## Adobe hooks

The button component is built using the Adobe [useButton hook](https://react-spectrum.adobe.com/react-aria/useButton.html){:target="_blank"} which amoungst other things provides a [unified press event](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html).

## Usage

```jsx{live:true}
<Button>Button</Button>
```

### Button variants

Use the `variant` prop to change the visual style of the Button. By default you can set the value `primary`, `secondary` or `quiet` but you can extend this list to suit your needs.

```jsx{live:true}
<ButtonGroup>
  <Button variant="primary">Button</Button>
  <Button variant="secondary">Button</Button>
  <Button variant="quiet">Button</Button>
</ButtonGroup>
```

#### Call to Action (CTA)

In addition Button supports an `isCta` state allowing you to have a more 'press me!' version of a button when you need.

```jsx{live:true}
<ButtonGroup>
  <Button variant="primary" isCta>Button</Button>
  <Button variant="secondary" isCta>Button</Button>
  <Button variant="quiet" isCta>Button</Button>
</ButtonGroup>
```

### Button volume/size

Use the `vol` prop to control the volume with a numeric value `1-6`.


```jsx{live:true}
<div style={{
  display: "flex", 
  alignItems: "start",
  flexDirection: "column",
  gap: 12
}}>
  <Button vol={1}>Button</Button>
  <Button vol={2}>Button</Button>
  <Button vol={3}>Button</Button>
  <Button vol={4}>Button</Button>
  <Button vol={5}>Button</Button>
  <Button vol={6}>Button</Button>
</div>
```

### Button tone

Use the `tone` prop to 'set the tone' of the button. By default you can set the value to be `lead`, `support`, `info`, `success`, `warning`, `alert`, `light`, `dark` or `contrast` but you can add more depending on your needs.


```jsx{live:true}
<div style={{
  display: "flex", 
  alignItems: "start",
  flexWrap: "wrap",
  gap: 12
}}>
  <Button variant="primary" tone="lead">Lead</Button>
  <Button variant="primary" tone="support">Support</Button>
  <Button variant="primary" tone="info">Info</Button>
  <Button variant="primary" tone="success">Success</Button>
  <Button variant="primary" tone="warning">Warning</Button>
  <Button variant="primary" tone="alert">Alert</Button>
  <Button variant="primary" tone="light">Light</Button>
  <Button variant="primary" tone="dark">Dark</Button>
  <Button variant="primary" tone="contrast">Contrast</Button>
</div>
```

### Button with Icon

Use the `icon` prop to add an Icon to the button and control its position with the `iconPos` prop.

```jsx{live:true}
<ButtonGroup>
  <Button variant="primary" iconPos="start" icon={<PreviewIcon />}>
    Preview
  </Button>
  <Button variant="secondary" icon={<AngleRightIcon />}>
    This way
  </Button>
  <Button variant="quiet" icon={
    <Icon>
      <path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path>
    </Icon>}>
    Add Media
  </Button>
</ButtonGroup>
```
