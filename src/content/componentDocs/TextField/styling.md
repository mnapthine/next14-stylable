---
component: text-field
---

## Structure

The `HTML`/`CSS` structure of a TextField consisting of its root and parts.

```
.root // <div />
-> .label // <label /> (Label component)
-> .inputContainer // <div />
--> .input // <input />
--> .fieldSet // <fieldset /> (optional)
---> .legend // <fieldset />
-> .helpText // <div /> (HelpText component)
```

> Note: TextField uses Field internally and the style api extends that of Field. In practice that means that if you style the base Field then those styles will apply to all Fields. So checkout the [Field docs](/components/field) as well.

TextField supports `InputAdornment`'s and when used they render alongside the input, so if you are stlying from stratch you are gonna want use either `fieldset` or `inputContainer` to apply backgrounds/borders etc.

### Whats with the fieldset?

The fieldset is a bit of an workaround when you want to have the `over` type of label position where the label sits on top of the border of the field when it has a value. Usually this would result in the border ~~striking~~ through the text but `legend` happens to have the ability to apply space around it via padding, which is very handy and can be exploited.

```{live:true}
<TextField 
  label="Label is over" 
  labelPosition="over" 
  defaultValue="Default value" 
/>
```

It is an idea borrowed from [Material UI TextField](https://mui.com/material-ui/react-text-field/) and we hide it in the same way from screen readers. However, it can be disabled via `disableFieldset` should you not want to support this style. You should then look to focus your styling on the `inputContainer` for borders and such.

I couldn't find an article talking about the Material UI TextField but [The Magical Use of Uncommon Labels Fieldset and Legend](https://programming.earthonline.us/the-magical-use-of-uncommon-labels-fieldset-and-legend-d3b29df4fb14) speaks to the general concept. 


### Target the 'parts'

TextField extends Field so we can access all those parts and the api is consistent across all field based components.

We can target the root *and* the parts by imported the style api from Checkbox.

```css
/*= example-textField.st.css */

@st-import TextField from "@actionishope/shelley/TextField/textField.st.css";

@st-scope body {
  
  /* root */
  TextField {}
  
  /* label */
  TextField::label {}
  
  /* inputContainer */
  TextField::inputContainer {}
  
  TextField::textAreaWrap {} /* only applies when rows prop > 1 */
    
  /* input */
  TextField::input {}
  TextField::startAdornment {}
  TextField::endAdornment {}

  /* fieldset */
  TextField::fieldset {}
  TextField::legend {}
  
  /* helpText */
  TextField::helpText {}
  /**/
}

```

### Target the 'states'

We can also target the root states and the parts inside of that given state.

```css
/*= example-checkbox.st.css */

@st-scope body {
  /* you can now access the states (single:)... */
  TextField:isRequired {}
  TextField:isDisabled {}
  TextField:isReadOnly {}
  TextField:hasValue {}
  TextField:hasError {}
  
  TextField:vol(1) {}
  TextField:vol(6) {}
  
  TextField:varient(filled) {}
  TextField:varient(outline) {}
  TextField:varient(quiet) {}
  TextField:varient(custom) {}
  
  TextField:labelPosition(top) {}
  TextField:labelPosition(side) {}
  TextField:labelPosition(over) {}
  TextField:labelPosition(hidden) {}
  
  /* ...and the parts (double::).... */
  TextField::label {}
  TextField::inputContainer {}
  TextField::input {}
  /* etc */
  
  /* ...and the state of parts... */
  TextField::helpText:isErrorMessage {}
}
```

> Note: This is not exhaustive, use the auto-complete feature of [stylable intelligence](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence) to explore what is available.


## Extending

To extend to your own class use `st-extends`.

```css
/* your-component.st.css*/
@st-import TextField from "@actionishope/shelley/TextField/checkbox.st.css";

.myTextField {
  -st-extends: TextField;
}

.myTextField::label {}
.myTextField::input {}
.myTextField:hasError::input {}

```

## General styling

@todo:LinkStyleSetup
