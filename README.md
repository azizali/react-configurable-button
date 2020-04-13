# Configurable Button

Create a `Button` component

1. Button component takes three props:
    - `value` - The text to show for the button
    - `type` - type of element, `button`, `input` or `anchor`
    - `to` - Destination the button will take you to in case the button is of type anchor

1. Depending on the props passed, the `Button` component will render appropriate button

1. Extra Credit: All remaining props that the `Button` component gets, are passed down to the rendered element.

## Scenarios
Scenario #1:
```
// Input:
<Button
  value="Click me"
  type="anchor"
  to="https://google.com"
/>

// Output:
<a href="https://google.com">Click me</a>
```
Scenario #2:
```
// Input:
<Button
  value="Click me 2"
  type="button"
/>

// Output:
<button>Click me 2</button>
```

Scenario #3:
```
// Input:
<Button
  value="Click me 3"
  type="input"
/>

// Output:
<input type="button" value="Click me 3" />
```