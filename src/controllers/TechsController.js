/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Tech} from "./../entity/Tech";
import {ListController} from "./abtract/ListController";

export class TechsController extends ListController {

    constructor(factory) {
        super(factory, Tech, '/techs');
    }
}

TechsController.$inject = ['RepositoryFactory'];
