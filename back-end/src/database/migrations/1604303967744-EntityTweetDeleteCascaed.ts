import {MigrationInterface, QueryRunner} from "typeorm";

export class EntityTweetDeleteCascaed1604303967744 implements MigrationInterface {
    name = 'EntityTweetDeleteCascaed1604303967744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_0a23c50228c2db732e3214682b0"`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_0a23c50228c2db732e3214682b0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_0a23c50228c2db732e3214682b0"`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_0a23c50228c2db732e3214682b0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
