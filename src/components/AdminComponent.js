/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {AdminController} from "./../controllers/AdminController";

export class AdminComponent {
    template = require('./../views/admin.html');
    controller = AdminController;
}