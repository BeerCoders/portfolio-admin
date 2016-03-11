/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ProjectsController} from "./../controllers/ProjectsController";

export class ProjectsComponent {
    constructor() {
        this.template = require('./../views/projects.html');
        this.controller = ProjectsController;
    }
}
