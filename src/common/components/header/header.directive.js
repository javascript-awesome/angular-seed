'use strict';

import template from './header.template.html';

export class HeaderDirective {
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.template = template;
        this.scope = {
            title: '@awesomeHeaderTitle',
            homeState: '@awesomeHeaderHomeState'
        };
    }

    link(scope, element, attrs) { }
};
