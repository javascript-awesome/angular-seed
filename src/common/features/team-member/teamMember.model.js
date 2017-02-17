'use strict';

export class TeamMemberModel {
    /**
     * Constructor
     * @param {String} name
    */
    constructor(name) {
        this.name = name;
        this._skills = [];
    }

    /**
     * Add skill
     * @param {String} skill
     * @returns {TeamMemberModel}
    */
    addSkill(skill) {
        if (this._skills.indexOf(skill) === -1) {
            this._skills.push(skill);
        }

        return this;
    }
    
    /**
     * Add skills
     * @param {Array.<String>} skills
     * @returns {TeamMemberModel}
    */
    addSkills(skills) {
        skills.forEach(function (skill) {
            this.addSkill(skill);
        }, this);

        return this;
    }
    
    /**
     * Get skills
     * @returns {Array.<String>}
     */
    getSkills() {
        return this._skills.slice();
    }
}