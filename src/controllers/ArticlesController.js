/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Article} from "./../entity/Article";
import {ListController} from "./abtract/ListController";

export class ArticlesController extends ListController {

    constructor(factory) {
        super(factory, Article, '/articles');
    }
}

ArticlesController.$inject = ['RepositoryFactory'];
