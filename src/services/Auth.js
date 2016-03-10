/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Settings} from "../constants";

Auth.$inject = ['$http', 'AccessService', 'OAuth', 'Settings'];

export class Auth {

    constructor($http, AccessService, OAuth, Settings) {
        this.http = $http;
        this.OAuth = OAuth;
        this.AccessService = AccessService;
        this.Settings = Settings;
    }

    login(username, password) {
        return this.OAuth.getAccessToken({
            username: username,
            password: password
        }).then((response) => {
            return response.data;
        });
    }

    verify(resetToken, firstPassword, secondPassword) {
        let data = {
            fos_user_resetting_form: {
                plainPassword: {
                    first: firstPassword,
                    second: secondPassword
                }
            }
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/resetting/reset/' + resetToken,
            data: data
        };

        return this.http(req).then(function (response:any) {
            return response.data;
        });
    }

    register(email, firstPassword, secondPassword) {
        let data = {
            fos_user_registration_form: {
                email: email,
                plainPassword: {
                    first: firstPassword,
                    second: secondPassword
                }
            }
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/register/',
            data: data
        };

        return this.http(req).then((response) => {
            return response.data;
        });
    }

    forgotPassword(username) {
        let data = {
            'username': username
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/resetting/send-email',
            data: data
        };

        return this.http(req).then((response) => {
            return response.data;
        });
    }

    me() {
        let req = {
            method: 'GET',
            url: this.Settings.url + '/users/me'
        };

        return this.http(req).then((response) => {
            if (response.data) {
                this.AccessService.setUser(response.data);
            }
        });
    }
}
