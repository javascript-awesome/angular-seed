'use strict';

import angular from 'angular';

import {TeamMemberModel} from './teamMember.model';
import {TeamMemberCollection} from './teamMember.collection';
// services
import {TeamMemberService} from './teamMember.service';

angular.module('app.common.features.team-member', [
    ])
    .factory('TeamMemberModel', TeamMemberModel)
    .factory('TeamMemberCollection', TeamMemberCollection)
    .service('TeamMemberService', TeamMemberService);
