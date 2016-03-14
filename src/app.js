/**
 * This file is part of the portfolio-admin package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import "./../resources/styles/main.sass";
import "./../resources/scripts/scripts.js";

import 'angular-ui-router';
import 'angular-flash-alert';
import 'angular-messages';
import 'angular-resource';
import '../node_modules/angular-ckeditor/angular-ckeditor.min';

import 'angular-repository';
import 'angular-symfony-acl';
import 'angular-symfony-form';
import 'angular-vgravatar';
import 'angular-voauth2';

import {Settings} from "./constants";
import {config as routesConfig} from "./configs/routes";
import {config as repositoryConfig} from "./configs/repository";
import {config as oauthConfig} from "./configs/oauth";
import {config as aclConfig} from "./configs/acl";
import {run as aclRun} from "./configs/acl";
import {LoginComponent} from "./components/LoginComponent";
import {LogoutComponent} from "./components/LogoutComponent";
import {AdminComponent} from "./components/AdminComponent";
import {ForgotPasswordComponent} from "./components/ForgotPasswordComponent";
import {ResetComponent} from "./components/ResetComponent";
import {HeaderComponent} from "./components/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent";
import {ArticlesComponent} from "./components/ArticlesComponent";
import {ProjectsComponent} from "./components/ProjectsComponent";
import {JobsComponent} from "./components/JobsComponent";
import {MediasComponent} from "./components/MediasComponent";
import {SkillsComponent} from "./components/SkillsComponent";
import {ArticleComponent} from "./components/ArticleComponent";
import {JobComponent} from "./components/JobComponent";
import {MediaComponent} from "./components/MediaComponent";
import {ProjectComponent} from "./components/ProjectComponent";
import {SkillComponent} from "./components/SkillComponent";
import {Auth} from "./services/Auth";

const appName = 'app';
const requirements = [
    'ui.router',
    "vOAuth2",
    "vRepository",
    "vGravatar",
    'vSymfonyACL',
    'vSymfonyForm',
    'ngFlash',
    'ngMessages',
    'ngResource',
    'ckeditor'
];

angular.module(appName, requirements)
    .component("headerNav", new HeaderComponent())
    .component("footerNav", new FooterComponent())
    .component("login", new LoginComponent())
    .component("logout", new LogoutComponent())
    .component("forgotPassword", new ForgotPasswordComponent())
    .component("reset", new ResetComponent())
    .component("admin", new AdminComponent())
    .constant("Settings", new Settings())
    .service("Auth", Auth)
    .config(oauthConfig)
    .config(routesConfig)
    .config(repositoryConfig)
    .run(aclRun)
    .component("articles", new ArticlesComponent())
    .component("projects", new ProjectsComponent())
    .component("jobs", new JobsComponent())
    .component("medias", new MediasComponent())
    .component("skills", new SkillsComponent())
    .component("article", new ArticleComponent())
    .component("job", new JobComponent())
    .component("media", new MediaComponent())
    .component("project", new ProjectComponent())
    .component("skill", new SkillComponent());

angular.bootstrap(document, ["app"], {
    strictDi: true
});