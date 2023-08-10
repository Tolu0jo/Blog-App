"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSubscriber = void 0;
const typeorm_1 = require("typeorm");
const entitty_1 = require("./entitty");
let UserSubscriber = exports.UserSubscriber = class UserSubscriber {
    listenTo() {
        return entitty_1.User;
    }
    beforeInsert(event) {
        console.log(`Before user insert: ${event.entity.name}`);
    }
    afterInsert(event) {
        console.log(`After user insert: ${event.entity.name}`);
    }
    beforeUpdate(event) {
        console.log(`Before user update: ${event?.entity?.name}`);
    }
    afterUpdate(event) {
        console.log(`After user update: ${event?.entity?.name}`);
    }
    beforeRemove(event) {
        console.log(`Before user remove: ${event?.entity?.name}`);
    }
    afterRemove(event) {
        console.log(`After user remove: ${event?.entity?.name}`);
    }
};
exports.UserSubscriber = UserSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], UserSubscriber);
