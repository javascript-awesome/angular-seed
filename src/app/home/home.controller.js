 import {TeamMemberModel} from '../../common/features/team-member/teamMember.model';
 import {TeamMemberCollection} from '../../common/features/team-member/teamMember.collection';
 
 class HomeController {

    constructor($scope) {
        $scope.team = new TeamMemberCollection('DataArt');

        $scope.teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);

        $scope.team.addMember($scope.teamMember);
    }
};

HomeController.$inject = ['$scope'];

export default HomeController;
