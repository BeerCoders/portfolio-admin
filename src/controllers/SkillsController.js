/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Skill} from "./../entity/Skill";
import {ListController} from "./abtract/ListController";

export class SkillsController extends ListController {

    constructor(factory) {
        super(factory, Skill, '/skills');
    }
}

SkillsController.$inject = ['RepositoryFactory'];
