/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ProjectController} from "./../controllers/ProjectController";

export class ProjectComponent {
    constructor() {
        this.template = require('./../views/project.html');
        this.controller = ProjectController;
    }
}