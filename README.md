# Element Ears

A library that hooks up DOM elements to state changes. 

## Hello World

There are two basic ways to bind elements to state.

### bind attribute

Create an element and pass it a handler that change its properties. Below, when `foo` changes, `handleFoo` is called. 

```javascript
import { ObservableVar, element } from 'element-ears';

const HelloEl = () => {

    const foo = new ObservableVar(0);

    const handleFoo = (el, value) => {
        el.textContent = value;
    }

    return (
        element('div', {
            bind: [[foo, handleFoo]]
        })
    )
}
```

### bind factory

Create an element and pass it a callback that sets its children. Below, when `foo` changes, the callback sets the `span` as the child of the `div`.

```javascript
import { ObservableVar, bind, element } from 'element-ears';

const WorldEl = () => {

    const foo = new ObservableVar(0);

    return (
        bind('div', {}, foo, (value) =>
            element('span', {textContent: value})
        )
    )
}
```
