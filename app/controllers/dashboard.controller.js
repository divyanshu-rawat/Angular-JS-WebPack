'use strict';

DashboardController.$inject = ['GithubStatusService'];

function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    gh.getStatus().then(function(response) {

    	response = response.data.status;
        _this.github = response;
    });
}


module.exports = DashboardController;