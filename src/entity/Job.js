/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'moment';

export class Job {

    constructor(parameters = {}) {
        this.id = parameters.id;
        this.company = parameters.company;
        this.description = parameters.description;
        this.position = parameters.position;
        this.currentJob = parameters.currentJob || parameters.current_job;
        this.dateFrom = moment(parameters.dateFrom || parameters.date_from).format("DD/MM/YYYY");
        this.dateTo = moment(parameters.dateTo || parameters.date_to).format("DD/MM/YYYY");
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}
