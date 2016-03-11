/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {MediasController} from "./../controllers/MediasController";

export class MediasComponent {
    constructor() {
        this.template = require('./../views/medias.html');
        this.controller = MediasController;
    }
}
