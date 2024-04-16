---
date: "2021-11-25"
slug: popup
thumbnail: /assets/getting-started.jpeg
title: Popup
description: A Popup can be used to display some content on top of another.
category: Overlays
---

Most often you will not need a Popup directly but you will use it indirectly on other components DialogTrigger and MenuTrigger but you *can* use it as part of a custom component.

## Import

```
import { Popup } from "@actionishope/shelley/Popup";
import { Portal } from "@actionishope/shelley/Portal";
```

- **Popup**: The popup supporting various visual states and icons.
- **Portal**: Used to inject content into a specificed node.

## Adobe hooks

The Popup component is built using the Adobe [useOverlay](https://react-spectrum.adobe.com/react-aria/useOverlay.html) and [useOverlayPosition](https://react-spectrum.adobe.com/react-aria/useOverlayPosition.html) hooks.


## Usage

To simply open and close an inline (renders where it exists) Popup we can use a simple Button as a trigger.


```jsx{live:true}

() => {
  const triggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button
        ref={triggerRef}
        variant="secondary"
        onPress={() => setIsOpen(!isOpen)}
        aria-expanded = {isOpen ? "true" : "false"}
        aria-controls = "customPopup"
      >
        Trigger Popup
      </Button>
      {isOpen && (
        <Popup
          id="customPopup"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          offset={8}
          triggerRef={triggerRef}
        >
          <P vol={1}>Popup Content</P>
        </Popup>
      )}
    </div>
  );
};
```

### Accessibility

Pay attention to the trigger of the Popup so you can ensure you have manually set the following aria attributes. These will tell a screen reader that the button and Popup are related.

- `aria-expanded`
- `aria-controls`
- `id`

Popup doesn't provide `is-labelledby` or type/role of modal, you will need to provide this.

### FocusOn

Internally Popup uses `FocusOn` from [react-focus-on](https://github.com/theKashey/react-focus-on#api) to manage aria compliant focus locks which is accessible via `focusOnProps`.

TIP: A 'focus lock' is where we purposely 'lock' a user in an area so when they hit tab they can only access focusable element in that area and don't go wandering off behind modals and other places. A focus lock must always offer a way out of the lock (e.g a modal close button).

### Positioning

The Popup will be positioned relative to the `triggerRef`. Use the `placement` prop to change the position. Defaults to `top`.

### Flip

The Popup will flip itself when approaching the edge of the screen you can disable it by setting `shouldFlip` to false.

### Portal

Often you will not want an inline Popup and it can cause a headache in terms of being clipped or hidden because of where it is. Use Portal to render content in a different location, usually in the root of `body`.

When rendering into a portal ensure the portal is wrapped by the main theme classes else it will appear unstyled.

```jsx{live:true}

() => {
  const triggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button
        ref={triggerRef}
        variant="secondary"
        onPress={() => setIsOpen(!isOpen)}
        aria-expanded = {isOpen ? "true" : "false"}
        aria-controls = "customPopup"
      >
        Trigger Popup
      </Button>
      {isOpen && (
        <Portal selector="body">
          <Popup
            id="customPopup"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            offset={8}
            triggerRef={triggerRef}
          >
            <P vol={1}>Popup Content</P>
          </Popup>
        </Portal>
      )}
    </div>
  );
};
```

### Using with Abobe hooks

We can use Adobes hooks with Popup as well so be sure to checkout their docs.

```jsx{live:true}

() => {
  const triggerRef = React.useRef(null);
  // Changed to adobe trigger state
  const state = useOverlayTriggerState({});
  // Add ref for overlay
  const overlayRef = React.useRef(null);

  // Added Adobes useOverlayTrigger giving us aria props to spread.
  const { triggerProps, overlayProps } = useOverlayTrigger(
    {
      type: "dialog",
    },
    state,
    triggerRef
  );

  return (
    <div>
      {/* Whatever you use as a trigger will need an onPress prop... */}
      <Button
        {...triggerProps} // Spread triggerProps
        ref={triggerRef}
        isDisabled={state.isOpen} // Updated state
      >
        Click me
      </Button>
      {state.isOpen && ( // Updated state
        <Portal selector="body">
          <Popup
            {...overlayProps} // Spread overlayProps
            isOpen={state.isOpen} // Updated state
            onClose={() => state.close()}
            offset={8}
            ref={overlayRef}
            triggerRef={triggerRef}
            placement="bottom"
          >
            <Dialog size="small">Children</Dialog>
          </Popup>
        </Portal>
      )}
    </div>
  );
};
```
