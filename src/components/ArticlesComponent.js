/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ArticlesController} from "./../controllers/ArticlesController";

export class ArticlesComponent {
    constructor() {
        this.template = require('./../views/articles.html');
        this.controller = ArticlesController;
    }
}
