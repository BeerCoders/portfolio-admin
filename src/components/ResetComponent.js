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
    template = require('./../views/reset.html');
    controller = ResetController;
}