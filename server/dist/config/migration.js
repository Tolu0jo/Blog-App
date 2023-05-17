"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Users');
    }
}
exports.CreateUsersTable = CreateUsersTable;
