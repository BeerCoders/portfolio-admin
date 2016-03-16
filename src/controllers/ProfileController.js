/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {User} from "./../entity/User";

export class ProfileController {

    constructor($state, $stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(User, '/users');
        this.params = $stateParams;
        this.$state = $state;
        this.form = 'user';
        this.errors = [];

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((user) => {
                this.entity = user;
            });
        }
    }

    update() {
        let data = {
            user: {
                name: this.entity.name,
                surname: this.entity.surname,
                birth: this.entity.birth
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then((data) => {
                this.Flash.create("success", "Saved.", "success");
                this.$state.go('profile', {id: data.id}, {'reload': true});
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
}

ProfileController.$inject = ['$state', '$stateParams', 'RepositoryFactory', 'Flash'];
