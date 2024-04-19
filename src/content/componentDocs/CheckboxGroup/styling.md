---
component: checkbox-group
---

## HTML Structure 

The `HTML`/`CSS` structure of a CheckboxGroup consisting of its root and parts:

**Checkbox**:

```
.root // <label />
-> .text // <span />
--> .input // <input />
```

**CheckboxGroup**:

```
.root // <div />
-> .label // <label /> (Label component)
-> .group // <div />
---> [Checkboxes] // x number of Checkboxes
-> .helpText // <div /> (HelpText component)
```


> Note: CheckboxGroup uses Field internally thus extending its style api so checkout the [Field docs](/components/field) as well. For CheckboxGroup and RadioGroup we get us a class of `.group` instead of the `.inputContainer` we get for the other field types.


## Target the 'parts'

We can target the root *and* the parts by importing the style api from Checkbox and CheckboxGroup.

```css
/*= example-checkbox.st.css */

@st-import Checkbox from "@actionishope/shelley/Checkbox/checkbox.st.css";
@st-import CheckboxGroup from "@actionishope/shelley/Checkbox/checkboxGroup.st.css";

@st-scope body {
  
  /*= Checkbox =*/
  
  /* root */
  Checkbox {}
  
  /* text */
  Checkbox::text {}
  
  /* input */
  Checkbox::input {}
  
  
  /*= CheckboxGroup =*/
  
  /* root */
  CheckboxGroup {}

  /* label */
  CheckboxGroup::label {}
  
  /* group */
  CheckboxGroup::group {}
  
  /* A Checkbox inside a Group */
  CheckboxGroup Checkbox {}
  
  /* helpText */
  CheckboxGroup::helpText {}
  
}

```

## Target the 'states'

We can also target the root states and the parts inside of that given state.

```css
/*= example-checkbox.st.css */
@st-import Checkbox from "@actionishope/shelley/Checkbox/checkbox.st.css";
@st-import CheckboxGroup from "@actionishope/shelley/Checkbox/checkboxGroup.st.css";

@st-scope body {
  
  /*= Checkbox =*/
  Checkbox {}
  
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
  
  /* ... */
  
  /*= CheckboxGroup =*/
  
  CheckboxGroup {}
  
  CheckboxGroup::label {}
  CheckboxGroup::group {}

  CheckboxGroup:orientation(vertical)::group {}
  CheckboxGroup:orientation(horizontal)::group {}
  
  CheckboxGroup::helpText {}
  
  CheckboxGroup:isInvalid {}
  CheckboxGroup:isDisabled {}
  CheckboxGroup:isReadOnly {}

  CheckboxGroup:vol(1)::label {}
  CheckboxGroup:vol(1) Radio::text {}
 
}
```

> Note: This is not exhaustive, use the auto-complete feature of [stylable intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) to explore what is available.


## Extending

To extend to your own class use `st-extends`.

```css
/* your-component.st.css*/
@st-import CheckboxGroup from "@actionishope/shelley/Checkbox/checkboxGroup.st.css";

.myCheckboxGroup {
  -st-extends: CheckboxGroup;
}

.myCheckboxGroup::label {}
.myCheckboxGroup:orientation(vertical)::group {}

```

## General styling

@todo:LinkStyleSetup
