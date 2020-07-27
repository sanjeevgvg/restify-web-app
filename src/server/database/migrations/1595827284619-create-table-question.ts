import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableQuestion1595827284619 implements MigrationInterface {
    private _table = 'question';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this._table,
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        length: '48',
                        isPrimary: true,
                    },
                    {
                        name: 'type_id',
                        type: 'varchar',
                        length: '48',
                    },
                    {
                        name: 'label',
                        type: 'varchar',
                        length: '64',
                        isUnique: true,
                    },
                    {
                        name: 'options',
                        type: 'json',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
            true,
        );
        await queryRunner.query(
            'ALTER TABLE ' +
                this._table +
                ' ADD CONSTRAINT `question_type_foreign` FOREIGN KEY (`type_id`) REFERENCES `question_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${this._table}`);
    }
}
