/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {User} from "./../../main/entity/User";

AdminController.$inject = ['RepositoryFactory'];

export class AdminController {

    constructor(factory) {
        this.factory = factory;
        this.repository = this.getRepository(User, '/users');

        this.repository.getById(1).then((response) => {
            this.user = response;
        });
    }

    getRepository(model, path) {
        return this.factory.getRepository(model, path);
    }
}