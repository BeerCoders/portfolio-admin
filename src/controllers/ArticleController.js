/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Article} from "./../entity/Article";

export class ArticleController {

    constructor($stateParams, factory) {
        this.repository = factory.getRepository(Article, '/articles');
        this.article = new Article();
        this.params = $stateParams;
        this.form = 'article';
        this.errors = [];
        this.options = {
            language: 'en',
            allowedContent: true,
            entities: false
        };

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((article) => {
                this.article = article;
            });
        }
    }

    update() {
        if (this.params.id) {
            this.repository.updated($stateParams.id, this.article);
        } else {
            this.repository.create(this.article);
        }
    }
}

ArticleController.$inject = ['$stateParams', 'RepositoryFactory'];
