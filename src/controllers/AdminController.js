/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Article} from "./../entity/Article";
import {Job} from "./../entity/Job";
import {Project} from "./../entity/Project";
import {Skill} from "./../entity/Skill";
import {Media} from "./../entity/Media";

export class AdminController {

    constructor(factory) {
        let limit = 9999;
        let repositories = {
            articles: {class: Article, path: '/articles'},
            jobs: {class: Job, path: '/jobs'},
            projects: {class: Project, path: '/projects'},
            skills: {class: Skill, path: '/skills'},
            medias: {class: Media, path: '/social-medias'}
        };

        var lists = this.lists = {};

        for (let key in repositories) {
            if (repositories.hasOwnProperty(key)) {
                let data = repositories[key];
                let repository = factory.getRepository(data.class, data.path);
                repository.getAll({
                    limit: limit
                }).then((response) => {
                    lists[key] = response;
                });
            }
        }
    }
}

AdminController.$inject = ['RepositoryFactory'];