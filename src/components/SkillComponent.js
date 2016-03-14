/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {SkillController} from "./../controllers/SkillController";

export class SkillComponent {
    constructor() {
        this.template = require('./../views/skill.html');
        this.controller = SkillController;
    }
}