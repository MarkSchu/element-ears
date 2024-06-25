import { element, clearChildren }  from './dom.mjs';

export function bind(tag, attrs, observable, createElement) {
    let parent = element(tag, attrs); 
    observable.onEmit((value) => {
        let children = createElement(value);
        clearChildren(parent);
        if (Array.isArray(children)) {
            children.forEach((child) => {
                parent.appendChild(child);
            });
        } else {
            parent.appendChild(children);
        }
    });
    return parent;
}

export function listen(tag, attrs, observable, createElement) {
    let parent = element(tag, attrs); 
    observable.onEmit((value) => {
        let children = createElement(value);
        clearChildren(parent);
        if (Array.isArray(children)) {
            children.forEach((child) => {
                parent.appendChild(child);
            });
        } else {
            parent.appendChild(children);
        }
    });
    return parent;
}

