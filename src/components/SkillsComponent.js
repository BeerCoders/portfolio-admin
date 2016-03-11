/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {SkillsController} from "./../controllers/SkillsController";

export class SkillsComponent {
    constructor() {
        this.template = require('./../views/skills.html');
        this.controller = SkillsController;
    }
}