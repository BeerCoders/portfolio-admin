/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["AccessServiceProvider"];

export function config(AccessServiceProvider) {
    var myConfig = {
        rolesHierarchy: {
            1: 'ROLE_USER',
            2: 'ROLE_MODERATOR',
            6: 'ROLE_ADMIN',
            7: 'ROLE_SUPER_ADMIN'
        },
        storage: 'localStorage',
        storageKey: 'user'
    };
    AccessServiceProvider.config(myConfig);
}

run.$inject = ['$rootScope', '$state', 'AccessService'];

export function run($rootScope, $state, AccessService) {
    $rootScope.$on('vsymfonyacl:error', function (event, user) {
        AccessService.setUser(null);
        $state.go('login', {}, {reload: true});
    });
}