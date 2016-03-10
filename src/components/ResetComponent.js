/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ResetController} from "./../controllers/ResetController";

export class ResetComponent {
    constructor() {
        this.template = require('./../views/reset.html');
        this.controller = ResetController;
    }
}