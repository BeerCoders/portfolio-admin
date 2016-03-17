/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'moment';
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
                this.entity.birth = moment(this.entity.birth).format("DD/MM/YYYY");
            });
        }
    }

    update() {
        let data = {
            user: {
                name: this.entity.name,
                surname: this.entity.surname,
                title: this.entity.title,
                location: this.entity.location,
                description: this.entity.description,
                birth: this.entity.birth
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then((response) => {
                this.Flash.create("success", "Saved.");
                this.$state.go('profile', {id: response.id}, {'reload': true});
            }, (response) => {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message);
                }
            });
        }
    }
}

ProfileController.$inject = ['$state', '$stateParams', 'RepositoryFactory', 'Flash'];
