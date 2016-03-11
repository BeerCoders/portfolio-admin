/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class Category {

    constructor(parameters) {
        this.id = parameters.id;
        this.name = parameters.name;
        this.position = parameters.position;
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}
