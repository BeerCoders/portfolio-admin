/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["OAuthProvider", 'Settings'];

export function config(OAuthProvider, Settings) {
    var myConfig = {
        baseUrl: Settings.url,
        clientId: Settings.clientId,
        clientSecret: Settings.clientSecret,
        grantPath: '/oauth/v2/token',
        revokePath: '/oauth/v2/revoke'
    };

    OAuthProvider.configure(myConfig);
}

run.$inject = ['$rootScope', '$window', 'OAuthToken'];

export function run($rootScope, $window, OAuthToken) {
    $rootScope.$on('voauth:error', function () {
        OAuthToken.removeToken();
        return $window.location.href = '/login';
    });
}