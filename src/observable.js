class ObservableEvent {

    constructor(value) {
        this.callbacks =[];
    }

    emit(values) {
        this.callbacks.forEach((callback) => {
            callback(values);
        });
    }

    onEmit(callback) {
        this.callbacks.push(callback);
    }
}

class ObservableVar {

    constructor(value) {
        this.value = value;
        this.callbacks =[];
    }

    emit(extras) {
        this.callbacks.forEach((callback) => {
            callback(this.value, extras);
        });
    }

    onEmit(callback) {
        this.callbacks.push(callback);
    }

    set(value) {
        this.value = value;
        this.emit();
    }
}

class ObservableBool extends ObservableVar {
    toggle() {
        this.value = !this.value;
        this.emit();
    }
    true() {
        this.value = true;
        this.emit();
    }
    false() {
        this.value = false;
        this.emit();
    }
}

class ObservableArray extends ObservableVar {
    push(value) {
        this.value.push(value);
        this.emit();
    }
}

exports.ObservableEvent = ObservableEvent;
exports.ObservableVar = ObservableVar;
exports.ObservableBool = ObservableBool;
exports.ObservableArray = ObservableArray;
