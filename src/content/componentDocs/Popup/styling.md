---
component: popup
---

## Structure

The `HTML`/`CSS` structure of a Popup consisting of its root and parts.

```
.root // <div />
-> .arrow // <svg />
-> .scroller // <div />
```


### Target the 'parts'

We can target the root *and* the parts by imported the style api from Popup.

```css
/*= example-popup.st.css */

@st-import Popup from "@actionishope/shelley/Popup/popup.st.css";

@st-scope body {
  
  /* root */
  Popup {}
  
  /* arrow */
  Popup::arrow {}
  
  /* scroller */
  Popup::scroller {}
  
}
```

### Target the 'states'

Popup doesn't have any `root` states but the `arrow` does:

```css
/*= example-checkbox.st.css */

@st-scope body {
  Popup::arrow:placement(top) {}
  Popup::arrow:placement(right) {}
  Popup::arrow:placement(bottom) {}
  Popup::arrow:placement(left) {}
}
```

## Extending

To extend to your own class use `st-extends`.

```css
/* your-component.st.css*/
@st-import Popup from "@actionishope/shelley/Popup/popup.st.css";

.myPopup {
  -st-extends: Popup;
}
.myPopup {}
.myPopup::arrow {}
.myPopup::scroller {}
.myPopup::arrow:placement(top) {}

```

## General styling

@todo:LinkStyleSetup
