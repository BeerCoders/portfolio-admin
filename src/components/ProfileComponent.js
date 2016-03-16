/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ProfileController} from "./../controllers/ProfileController";

export class ProfileComponent {
    constructor() {
        this.template = require('./../views/profile.html');
        this.controller = ProfileController;
    }
}