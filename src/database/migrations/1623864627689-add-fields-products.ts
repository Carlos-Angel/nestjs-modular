import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFieldsProducts1623864627689 implements MigrationInterface {
  name = 'addFieldsProducts1623864627689';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "createdAtt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "updatedAtt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAtt"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAtt"`);
  }
}
