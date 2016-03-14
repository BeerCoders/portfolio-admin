/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Job} from "./../entity/Job";

export class JobController {

    constructor($stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Job, '/jobs');
        this.entity = new Job();
        this.params = $stateParams;
        this.form = 'job';
        this.errors = [];

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((data) => {
                this.entity = data;
            });
        }
    }

    update() {
        let data = {
            job: {
                company: this.entity.company.id,
                position: this.entity.position,
                description: this.entity.description,
                dateFrom: this.entity.dateFrom,
                dateTo: this.entity.dateTo,
                currentJob: this.entity.currentJob
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

JobController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
