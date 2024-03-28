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

The button component is built using the Adobe [useButton hook](https://react-spectrum.adobe.com/react-aria/useButton.html) which amoungst other things provides a [unified press event](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html).

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


```{preview:true}
<ButtonGroup variant="secondary" splitButton>
  <Button>I'm a button</Button>
  <Button>I'm a button</Button>
</ButtonGroup>
```

| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Data     |
| Row 2    | Data     |

## More usage

- List item one
- List item two


I'm a paragrph with ~~strikethrough~~ text!

Link: https://velite.js.org/reference/cli#usage 


```jsx{live:true,twoCol:true}
<Button
  icon={
    <Icon>
      <path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z" />
    </Icon>
  }
>
  I'm a button
</Button>
```

```jsx{live:true,twoCol:true}
() => {
  const targetRef = useRef(null);
  return (
    <>
      <DialogTrigger
        type="popup"
        targetRef={targetRef}
      >
        <Button>Trigger</Button>
        <Dialog>
          <H2 vol={4} className={dialog.title} data-title>
            Anchor
          </H2>
          <hr className={dialog.divider} />
          <P className={dialog.content} vol={2}>
            This is a popup anchored to the span.
          </P>
        </Dialog>
      </DialogTrigger>
      <div style={{ marginTop: 80 }}>
        <P vol={1}>
          <span ref={targetRef}>popup appears over here</span>
        </P>
      </div>
    </>
  );
}
```

```jsx{live:true,twoCol:true}
<div style={{display: "flex", gap: 20, justifyContent: "center"}}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="quiet">Quiet</Button>
</div>
```

- Modal windows
- Forms
- Cards
- Toolbars

> To learn more about styling single part components, visit the
> [Component Style](/docs/styled-system/component-style#styling-single-part-components)
> page.

### My Great Heading

I need to highlight these ==very important words==.

```css

@st-namespace: "btn";

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    ) rgb(var(--background-start-rgb));
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
```
