'use strict';

import {TeamMemberModel} from './teamMember.model';

export class TeamMemberCollection {
    constructor(collectionName) {
        this.collectionName = collectionName;
        this.models = [];
    }

    /**
     * Add member
     * @param {TeamMemberModel} member
     * @returns {TeamMemberCollection}
     */
    addMember(member) {
        if (member instanceof TeamMemberModel) {
            this.models.push(member);
        }
        
        return this;
    }
}