'use strict';

export class VersionDirective {
    constructor(value) {
        this.value = value;
    }

    link(scope, element) {
        element.text(this.value);
    }
}
