/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Skill} from "./../entity/Skill";

export class SkillController {

    constructor($stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Skill, '/skills');
        this.entity = new Skill();
        this.params = $stateParams;
        this.form = 'skill';
        this.errors = [];

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((data) => {
                this.entity = data;
            });
        }
    }

    getTimes(number) {
        return new Array(number);
    }

    update() {
        let data = {
            skill: {
                name: this.entity.name,
                value: this.entity.value
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then(() => {
                this.Flash.create("success", "Saved.", "success");
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message, "error");
                }
            });
        } else {
            this.repository.create(data).then(() => {
                this.Flash.create("success", "Saved.", "success");
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

SkillController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
