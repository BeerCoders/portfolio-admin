/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];

export function config($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('admin', {
            url: '/',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<admin></admin>'
        })
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('logout', {
            url: '/logout',
            template: '<logout></logout>'
        })
        .state('forgotPassword', {
            url: '/reset',
            template: '<forgot-password></forgot-password>'
        })
        .state('reset', {
            url: '/reset/:token',
            template: '<reset></reset>'
        })
        .state('article', {
            url: '/article/:id',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<article></article>'
        })
        .state('project', {
            url: '/project/:id',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<project></project>'
        })
        .state('job', {
            url: '/job/:id',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<job></job>'
        })
        .state('skill', {
            url: '/skill/:id',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<skill></skill>'
        })
        .state('media', {
            url: '/media/:id',
            requireLogin: true,
            roles: ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
            template: '<media></media>'
        });
}