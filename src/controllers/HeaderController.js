/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {User} from "./../entity/User";

export class HeaderController {

    constructor(AccessService) {
        this.user = AccessService.getUser();
    }
}

HeaderController.$inject = ['AccessService'];