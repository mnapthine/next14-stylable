---
component: radio
---

## Structure

The `HTML`/`CSS` structure of a RadioGroup and Radios consisting of their root and parts.

**Radio**:

```
.root // <label />
-> .text // <span />
--> .input // <input />
```

**RadioGroup**:

```
.root // <div />
-> .label // <label /> (Label component)
-> .group // <div />
---> [Radios] // x number of Radios
-> .helpText // <div /> (HelpText component)
```



> Note: RadioGroup uses Field internally thus extending its style api so checkout the [Field docs](/components/field) as well. For RadioGroup and RadioGroup we get us a class of `.group` instead of the `.inputContainer` we get for the other field types.

### Target the 'parts'

We can target the root *and* the parts by imported the style api from Radio and RadioGroup.

```css
/*= example-checkbox.st.css */

@st-import Radio from "@actionishope/shelley/Radio/radio.st.css";
@st-import RadioGroup from "@actionishope/shelley/Radio/radioGroup.st.css";

@st-scope body {

  /*= Radio =*/

  /* root */
  Radio {}

  /* text */
  Radio::text {}

  /* input */
  Radio::input {}


  /*= RadioGroup =*/

  /* root */
  RadioGroup {}

  /* label */
  RadioGroup::label {}

  /* group */
  RadioGroup::group {}

  /* A Radio inside a Group */
  RadioGroup Radio {}

  /* helpText */
  RadioGroup::helpText {}
  
}
```

### Target the 'states'

We can also target the root states and the parts inside of that given state.

```css
/*= example-checkbox.st.css */

@st-import Radio from "@actionishope/shelley/Radio/radio.st.css";
@st-import RadioGroup from "@actionishope/shelley/Radio/radioGroup.st.css";

@st-scope body {
  
  /*= Radio =*/
  
  Radio {}
  
  /* parts (double::).... */
  Radio::text {}
  Radio::input {}
  Radio::input:checked {}
  
  /* access the states (single:)... */
  Radio:isInvalid {}
  Radio:isDisabled {}
  
  /* ...and the parts of things with states... */
  Radio:isInvalid::text {}
  Radio:isInvalid::input {}
  
  Radio:size(1)::text {}
  Radio:size(1)::input {}
  Radio:size(2) {}
  Radio:size(6) {}
  
  /* ... */
  
  
  /*= RadioGroup =*/
  
  RadioGroup {}
  
  RadioGroup::label {}
  RadioGroup::group {}

  RadioGroup:orientation(vertical)::group {}
  RadioGroup:orientation(horizontal)::group {}
  
  RadioGroup::helpText {}
  
  RadioGroup:isInvalid {}
  RadioGroup:isDisabled {}
  RadioGroup:isReadOnly {}

  RadioGroup:vol(1)::label {}
  RadioGroup:vol(1) Radio::text {}
  
  /* ... */
}

```

> Note: This is not exhaustive, use the auto-complete feature of [stylable intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) to explore what is available.


## Extending

To extend to your own class use `st-extends`.

```css
/* your-component.st.css*/
@st-import Radio from "@actionishope/shelley/Radio/radio.st.css";

.myRadio {
  -st-extends: Radio;
}

.myRadio::input {}
.myRadio:isInvalid::text {}

```

## General styling

@todo:LinkStyleSetup
