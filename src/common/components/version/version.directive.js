export class VersionDirective {
    constructor(value) {
        this.value = value;
    }

    link(scope, element, attrs) {
        element.text(this.value);
    }
};
