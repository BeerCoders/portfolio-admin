/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Media} from "./../entity/Media";
import {ListController} from "./abtract/ListController";

export class MediasController extends ListController {

    constructor(factory) {
        super(factory, Media, '/social-medias');
    }
}

MediasController.$inject = ['RepositoryFactory'];
