/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {User} from "./../entity/User";
import {Category} from "./../entity/Category";

export class Article {

    constructor(parameters = {}) {
        this.id = parameters.id;
        this.title = parameters.title;
        this.intro = parameters.intro;
        this.author = new User(parameters.author);
        this.category = new Category(parameters.category);
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}
