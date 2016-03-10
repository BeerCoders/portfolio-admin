/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

ResetController.$inject = ['$state', '$stateParams', 'Auth', 'Flash'];

export class ResetController {
    errors = null;
    form = 'fos_user_resetting_form';

    constructor($state, $stateParams, Auth, Flash) {
        this.Auth = Auth;
        this.Flash = Flash;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.title = 'BeerCoders Team';
        this.subtitle = 'Software Development tips & tricks';
    }

    verify() {
        var token = this.$stateParams.token;

        this.Auth.verify(token, this.plainPassword_first, this.plainPassword_second).then(() => {
            this.Flash.create("success", "You password has been reset. You may now login.", "success");
            this.$state.go('login', {}, {'reload': true});
        }, function (response) {
            if (response.data) {
                var errors = response.data.errors;
                var message = response.data.message;

                this.errors = errors;

                this.Flash.create("danger", message, "error");
            }
        });
    }
}
