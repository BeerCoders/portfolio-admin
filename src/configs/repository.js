/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["RepositoryFactoryProvider", 'Settings'];

export function config(RepositoryFactoryProvider, Settings) {
    var myConfig = {
        url: Settings.url,
        onSuccess: onSuccess
    };

    RepositoryFactoryProvider.configure(myConfig);
}

function onSuccess(response) {
    if (checkPropertyExistence(response, ['data'])) {
        let data = response.data;
        if (data instanceof Array) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    data[key] = new this.model(data[key]);
                }
            }

            return data;
        } else {
            return new this.model(data);
        }
    }
}

/**
 * Check if property exist
 *
 * @param obj
 * @param paths
 * @returns {boolean}
 */
function checkPropertyExistence(obj, paths = []) {
    for (var i = 0; i < paths.length; i++) {
        if (!obj || !obj.hasOwnProperty(paths[i])) {
            return false;
        }
        obj = obj[paths[i]];
    }
    return true;
}