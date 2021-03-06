/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Project} from "./../entity/Project";
import {Tech} from "./../entity/Tech";

export class ProjectController {

    constructor($stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Project, '/projects');
        this.entity = new Project();
        this.params = $stateParams;
        this.form = 'project';
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

    update() {
        let data = {
            project: {
                logo: this.entity.logo,
                flayer: this.entity.flayer,
                technologies: this.entity.technologies || [],
                description: this.entity.description
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

ProjectController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
