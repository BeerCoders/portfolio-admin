/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {TechController} from "./../controllers/TechController";

export class TechComponent {
    constructor() {
        this.template = require('./../views/tech.html');
        this.controller = TechController;
    }
}