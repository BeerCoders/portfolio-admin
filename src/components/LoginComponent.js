/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {LoginController} from "./../controllers/LoginController";

export class LoginComponent {
    template = require('./../views/login.html');
    controller = LoginController;
}