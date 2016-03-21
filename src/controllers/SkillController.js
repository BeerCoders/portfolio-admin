/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Skill} from "./../entity/Skill";
import {Tech} from "./../entity/Tech";

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

        this.techs = [];
        let iconsRepo = factory.getRepository(Tech, '/techs');
        iconsRepo.getAll({
            page: 1,
            limit: 9999
        }).then((response) => {
            this.techs = response;
        });
    }

    getTimes(number) {
        return new Array(number);
    }

    update() {
        let data = {
            skill: {
                value: this.entity.value,
                tech: this.entity.tech.id || this.entity.tech
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

SkillController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
