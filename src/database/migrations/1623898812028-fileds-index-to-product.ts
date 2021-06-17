import {MigrationInterface, QueryRunner} from "typeorm";

export class filedsIndexToProduct1623898812028 implements MigrationInterface {
    name = 'filedsIndexToProduct1623898812028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_2936b3d80c53a1054985740909" ON "product" ("price", "stock", "name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_2936b3d80c53a1054985740909"`);
    }

}
