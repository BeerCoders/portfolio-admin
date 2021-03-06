/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class ResetController {

    constructor($state, $stateParams, Auth, Flash) {
        this.Auth = Auth;
        this.Flash = Flash;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.title = 'BeerCoders Team';
        this.subtitle = 'Software Development tips & tricks';
        
        this.errors = null;
        this.form = 'fos_user_resetting_form';
    }

    verify() {
        var token = this.$stateParams.token;

        this.Auth.verify(token, this.plainPassword_first, this.plainPassword_second).then(() => {
            this.Flash.create("success", "You password has been reset. You may now login.");
            this.$state.go('login', {}, {'reload': true});
        }, function (response) {
            if (response.data) {
                var errors = response.data.errors;
                var message = response.data.message;

                this.errors = errors;

                this.Flash.create("danger", message);
            }
        });
    }
}

ResetController.$inject = ['$state', '$stateParams', 'Auth', 'Flash'];
