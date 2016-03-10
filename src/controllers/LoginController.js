/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class LoginController {

    constructor($state, Auth, Flash) {
        this.$inject = ['$state', 'Auth', 'Flash'];

        this.Auth = Auth;
        this.Flash = Flash;
        this.$state = $state;

        this.title = 'BeerCoders Team';
        this.subtitle = 'Software Development tips & tricks';
    }

    login() {
        this.Auth.login(this.email, this.password).then(() => {
            this.Auth.me().then(() => {
                this.Flash.create("success", "Login success.", "success");
                this.$state.go('admin', {}, {'reload': true});
            });
        }, (response) => {
            if (response.data) {
                if (response.data.error_description) {
                    this.Flash.create("danger", response.data.error_description, "error");
                }
            }
        });
    }
}
