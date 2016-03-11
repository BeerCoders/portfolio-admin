/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {JobsController} from "./../controllers/JobsController";

export class JobsComponent {
    constructor() {
        this.template = require('./../views/jobs.html');
        this.controller = JobsController;
    }
}
