/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Tech} from "./../entity/Tech";

export class Skill {

    constructor(parameters = {}) {
        this.id = parameters.id;
        this.value = parameters.value;
        this.name = parameters.name || '';
        this.tech = new Tech(parameters.tech);
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}
