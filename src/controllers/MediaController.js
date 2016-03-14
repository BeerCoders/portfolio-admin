/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Media} from "./../entity/Media";
import {Icon} from "./../entity/Icon";

export class MediaController {

    constructor($stateParams, factory, Flash) {
        this.Flash = Flash;
        this.repository = factory.getRepository(Media, '/social-medias');
        this.entity = new Media();
        this.params = $stateParams;
        this.form = 'social-media';
        this.errors = [];

        if ($stateParams.id) {
            this.repository.getById($stateParams.id).then((data) => {
                this.entity = data;
            });
        }

        this.icons = [];
        let iconsRepo = factory.getRepository(Icon, '/icons');
        iconsRepo.getAll({
            page: 1,
            limit: 9999
        }).then((response) => {
            this.icons = response;
        });
    }

    update() {
        let data = {
            social_media: {
                name: this.entity.name,
                url: this.entity.url,
                icon: this.entity.icon.name || this.entity.icon
            }
        };

        if (this.params.id) {
            this.repository.update(this.params.id, data).then(() => {
                this.Flash.create("success", "Saved.", "success");
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message, "error");
                }
            });
        } else {
            this.repository.create(data).then(() => {
                this.Flash.create("success", "Saved.", "success");
            }, function (response) {
                if (response.data) {
                    var errors = response.data.errors;
                    var message = response.data.message;

                    this.errors = errors;

                    this.Flash.create("danger", message, "error");
                }
            });
        }
    }
}

MediaController.$inject = ['$stateParams', 'RepositoryFactory', 'Flash'];
