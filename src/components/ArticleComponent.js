/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ArticleController} from "./../controllers/ArticleController";

export class ArticleComponent {
    constructor() {
        this.template = require('./../views/article.html');
        this.controller = ArticleController;
    }
}