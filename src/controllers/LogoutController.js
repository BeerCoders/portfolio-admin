/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class LogoutController {

    constructor($state, AccessService) {
        AccessService.setUser(null);
        $state.go('admin', {}, {'reload': true});
    }
}

LogoutController.$inject = ['$state', 'AccessService'];