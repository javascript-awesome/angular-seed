import template from './footer.template.html';

export class FooterDirective {
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.template = template;
        this.scope = {};
    }

    link(scope, element, attrs) { }
};
