---
component: checkbox
---

## Structure

The `HTML`/`CSS` structure of a Checkbox consisting of its root and parts.

```
.root // <label />
-> .text // <span />
--> .input // <input />
```

### Target the 'parts'

We can target the root *and* the parts by imported the style api from Checkbox.

```css
/*= example-checkbox.st.css */

@st-import Checkbox from "@actionishope/shelley/Checkbox/checkbox.st.css";

@st-scope body {
  
  /* root */
  Checkbox {}
  
  /* text */
  Checkbox::text {}
  
  /* input */
  Checkbox::input {}
}

```

### Target the 'states'

We can also target the root states and the parts inside of that given state.

```css
/*= example-checkbox.st.css */

@st-scope body {
  /* parts (double::).... */
  Checkbox::text {}
  Checkbox::input {}
  Checkbox::input:checked {}
  
  /* you can now access the states (single:)... */
  Checkbox:isIndeterminate {}
  Checkbox:isInvalid {}
  Checkbox:isDisabled {}
    
  /* ...and the parts of things with states... */
  Checkbox:isInvalid::text {}
  Checkbox:isInvalid::input {}
  
  Checkbox:size(1)::text {}
  Checkbox:size(1)::input {}
  Checkbox:size(2) {}
  Checkbox:size(6) {}
}

/* ... */

```

> Note: This is not exhaustive, use the auto-complete feature of [stylable intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) to explore what is available.


## Extending

To extend to your own class use `st-extends`.

```css
/* your-component.st.css*/
@st-import Checkbox from "@actionishope/shelley/Checkbox/checkbox.st.css";

.myCheckbox {
  -st-extends: Checkbox;
}

.myCheckbox::input {}
.myCheckbox:isInvalid::text {}

```

## General styling

@todo:LinkStyleSetup
