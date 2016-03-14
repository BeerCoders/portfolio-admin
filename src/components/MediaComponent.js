/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {MediaController} from "./../controllers/MediaController";

export class MediaComponent {
    constructor() {
        this.template = require('./../views/media.html');
        this.controller = MediaController;
    }
}