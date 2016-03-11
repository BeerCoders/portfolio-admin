/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Job} from "./../entity/Job";
import {ListController} from "./abtract/ListController";

export class JobsController extends ListController {

    constructor(factory) {
        super(factory, Job, '/jobs');
    }
}

JobsController.$inject = ['RepositoryFactory'];
