/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class User {

    constructor(parameters) {
        this.id = parameters.id;
        this.email = parameters.email;
        this.name = parameters.name;
        this.surname = parameters.surname;
        this.title = parameters.title;
        this.location = parameters.location;
        this.enabled = parameters.enabled;
        this.jobs = parameters.jobs;
        this.skills = parameters.skills;
        this.socialMedias = parameters.socialMedias;
        this.roles = parameters.roles;
        this.birth = parameters.birth;
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}