/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Tech} from "./../entity/Tech";

export class TechController {

    constructor($stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Tech, '/techs');
        this.entity = new Tech();
        this.params = $stateParams;
        this.form = 'tech';
        this.errors = [];

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((data) => {
                this.entity = data;
            });
        }
    }

    update() {
        let data = {
            tech: {
                name: this.entity.name,
                logo: this.entity.logo
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then(() => {
                this.Flash.create("success", "Saved.");
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message);
                }
            });
        } else {
            this.repository.create(data).then(() => {
                this.Flash.create("success", "Saved.");
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
}

TechController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
