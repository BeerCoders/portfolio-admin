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

    constructor($state, $stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Article, '/articles');
        this.article = new Article();
        this.params = $stateParams;
        this.$state = $state;
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
        let data = {
            article: {
                title: this.article.title,
                intro: this.article.intro,
                body: this.article.body
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then(() => {
                this.Flash.create("success", "Saved.");
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message);
                }
            });
        } else {
            this.repository.create(data).then((data) => {
                console.log(data);
                this.Flash.create("success", "Saved.");
                this.$state.go('article', {id: data.id}, {'reload': true});
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message);
                }
            });
        }
    }
}

ArticleController.$inject = ['$state', '$stateParams', 'RepositoryFactory', 'Flash'];
