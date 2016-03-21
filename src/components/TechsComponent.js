/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {TechsController} from "./../controllers/TechsController";

export class TechsComponent {
    constructor() {
        this.template = require('./../views/techs.html');
        this.controller = TechsController;
    }
}