/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {JobController} from "./../controllers/JobController";

export class JobComponent {
    constructor() {
        this.template = require('./../views/job.html');
        this.controller = JobController;
    }
}