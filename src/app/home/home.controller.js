 class HomeController {

    constructor($scope, TeamMemberModel, TeamMemberCollection) {
        $scope.team = new TeamMemberCollection('DataArt');

        $scope.teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);

        $scope.team.addMember($scope.teamMember);
    }
};

HomeController.$inject = ['$scope', 'TeamMemberModel', 'TeamMemberCollection'];

export default HomeController;
