import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableQuestionType1595826743209 implements MigrationInterface {
    private _table = 'question_type';
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
                        name: 'name',
                        type: 'varchar',
                        length: '64',
                        isUnique: true,
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${this._table}`);
    }
}
