/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class ListController {

    constructor(factory, entity, path) {
        this.items = [];
        this.repository = factory.getRepository(entity, path);
        this.loadItems();
    }

    loadItems(page = 1, limit = 9999) {
        this.repository.getAll({
            page: page,
            limit: limit
        }).then((response) => {
            this.items = response;
        });
    }
}