"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavigationItem = void 0;
var core_1 = require("@angular/core");
var NavigationItems = [
    {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'feather icon-home',
                classes: 'nav-item',
                url: '/dashboard/project'
            },
            {
                id: 'page-layouts',
                title: 'Promotion',
                type: 'item',
                classes: 'nav-item',
                icon: 'feather icon-layout',
                url: '/membership/mshp-membership'
            },
            {
                id: 'widget',
                title: 'Biens',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'statistic',
                        title: 'Biens',
                        type: 'item',
                        classes: 'nav-item',
                        url: '/hospital/hosp-doctor'
                    },
                    {
                        id: 'data',
                        title: 'Configuration',
                        type: 'item',
                        classes: 'nav-item',
                        url: '/widget/data'
                    }
                ]
            },
            {
                id: 'pc-project',
                title: 'Souscriptions',
                type: 'item',
                icon: 'feather icon-users',
                classes: 'nav-item',
                url: '/project-crm/pc-customers'
            }
        ]
    },
    {
        id: 'admin-panel',
        title: 'Paiements',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'hospital',
                title: 'Paiements',
                type: 'item',
                classes: 'nav-item',
                url: '/membership/mshp-country'
            },
            {
                id: 'ecommerce',
                title: 'Stripes',
                type: 'item',
                classes: 'nav-item',
                url: '/crypto/cp-wallet'
            }
        ]
    },
    {
        id: 'ui-element',
        title: 'Gestion des comptes',
        type: 'item',
        icon: 'feather icon-layers',
        classes: 'nav-item',
        url: '/hospital/hosp-pharmacist'
    },
    {
        id: 'forms',
        title: 'Configuration',
        type: 'item',
        icon: 'feather icon-layout',
        classes: 'nav-item',
        url: '/dashboard/statistic'
    }
];
var NavigationItem = /** @class */ (function () {
    function NavigationItem() {
    }
    NavigationItem.prototype.get = function () {
        return NavigationItems;
    };
    NavigationItem = __decorate([
        core_1.Injectable()
    ], NavigationItem);
    return NavigationItem;
}());
exports.NavigationItem = NavigationItem;
