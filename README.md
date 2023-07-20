# @congritta-ui/modal-window

This is modal window React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/loading-wheel`;

Add

```javascript
import ModalWindow from '@congritta-ui/modal-window';
```

into your code

## How to use

Example:

```jsx
export default function MyComponentWithModalWindow() {
  const [isModalWindow, setIsModalWindow] = useState(false);

  return (
    <ModalWindow
      isActive={isModalWindow}
      onClose={() => setIsModalWindow(false)}
      title="My modal window title"
    >
      Hello World
    </ModalWindow>
  )
}
```

### Props

| Prop name            | Description                                                    | Is Required | Default value         |
|----------------------|----------------------------------------------------------------|-------------|-----------------------|
| isActive             | Should modal window be shown                                   | true        |                       |
| title                | Modal window title. May be string or JSX                       | true        |                       |
| onClose              | Function that executes when user wants to close modal window   | false       |                       |
| animationDuration    | How many milliseconds is modal window revealing or hiding      | false       | `210`                 |
| closeButtonContents  | JSX contents in close button. Recommended to be an svg element | false       | `<inserted svg icon>` |
| containerClassName   | Classname for providing your styles to window container        | false       |                       |
| backgroundClassName  | Window background className                                    | false       |                       |
| headerClassName      | Classname for providing your styles to window header           | false       |                       |
| headerTitleClassName | Classname for providing your styles to window title            | false       |                       |
| closeButtonClassName | Classname for providing your styles to close button            | false       |                       |
| contentsClassName    | Classname for providing your styles to window contents wrapper | false       |                       |
