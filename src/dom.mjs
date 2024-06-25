function addChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

export function clearChildren(el) {
    var child = el.lastElementChild; 
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
    }
}

function setBinders(el, attrs) {
    const binders = attrs['bind'];
    binders.forEach((binder) => {
        const observable = binder[0];
        const callback = binder[1];
        observable.onEmit((value) => callback(el, value));
        // call right away! Its bind
        callback(el, observable.value); 
    });
}

function setListeners(el, attrs) {
    const listeners = attrs['listen'];
    listeners.forEach((listener) => {
        const observable = listener[0];
        const callback = listener[1];
        observable.onEmit((value) => callback(el, value));
        // don't call right away, wait for an event to fire
    });
}

function setStyles(el, attrs) {
    const styles = attrs['style'];
    for (var style in styles) {
        el.style[style] = styles[style];
    }
}

function setAttributes(el, attrs) {
    for (const attr in attrs) {

        if (attr === 'bind') {
            setBinders(el, attrs);
        }
        else if (attr === 'listen') {
            setListeners(el, attrs);
        }
        else if (attr === 'style') {
            setStyles(el, attrs);
        }
        else if (attr.startsWith('data-')) {
            el.setAttribute(attr, attrs[attr]);
        }
        else {
            el[attr] = attrs[attr];
        }
    }
}

export function element(tag, attrs) {
    // accepts both multiple child arguments and an array of children
    // ('div', {}, child1, child2)
    // ('div', {}, [child1, child2])
    const el = document.createElement(tag);
    const children = Array.from(arguments).slice(2).flat();
    setAttributes(el, attrs);
    addChildren(el, children);
    return el;
}


