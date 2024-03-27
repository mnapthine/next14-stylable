---
date: "2021-11-25"
slug: button
thumbnail: /assets/getting-started.jpeg
title: Button
description: Button is a foundational component that allows users to execute actions such as submitting forms, starting processes, or changing settings, translating user intentions into actions within an application. 🚀🎉
category: Buttons
import: import { Button } from "@actionishope/shelley";
---


# Button


## Usage for Buttons

```jsx{preview:true}
<Button>Button text - preview:true</Button>
```

```jsx{live:true,twoCol:true}
<Button>Button text - live:true</Button>
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
