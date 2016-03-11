/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {User} from "./../entity/User";

export class AdminController {

    constructor(factory) {
        this.factory = factory;
        this.repository = this.getRepository(User, '/users');

        this.repository.getAll().then((response) => {
            this.items = response;
            this.col = 'col-lg-' + (this.items.length < 4 ? Math.ceil(12 / this.items.length) : '4');
        });
    }

    getRepository(model, path) {
        return this.factory.getRepository(model, path);
    }
}

AdminController.$inject = ['RepositoryFactory'];