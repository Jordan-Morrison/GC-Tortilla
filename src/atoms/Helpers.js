export function optionalProps(prop) {
    return prop ? prop : undefined;
}

export function multiClass() {
    let classes = Array.prototype.slice.call(arguments);
    return classes.join(" ");
}