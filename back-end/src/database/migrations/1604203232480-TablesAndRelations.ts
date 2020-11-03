import {MigrationInterface, QueryRunner} from "typeorm";

export class TablesAndRelations1604203232480 implements MigrationInterface {
    name = 'TablesAndRelations1604203232480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "screen_name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL DEFAULT 'https://api.hello-avatar.com/adorables/face/eyes1/nose2/mouth4/f7ddaf/140', "verified" boolean NOT NULL DEFAULT false, "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tweets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "UQ_5557d8e2f862fe03f52b29d5159" UNIQUE ("id", "user_id"), CONSTRAINT "PK_19d841599ad812c558807aec76c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "tweet_id" uuid, "comment_tweet_id" uuid, CONSTRAINT "UQ_8ad5fe0da65853fa1d22e045b15" UNIQUE ("tweet_id", "comment_tweet_id"), CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "image" character varying, "video" character varying, "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "tweet_id" uuid, CONSTRAINT "UQ_12186835f5c843f812229d77721" UNIQUE ("id", "tweet_id"), CONSTRAINT "REL_36b931b67c9e3fce96ef61d95e" UNIQUE ("tweet_id"), CONSTRAINT "PK_b7c504072e537532d7080c54fac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid, "tweet_id" uuid, CONSTRAINT "UQ_ea98c24b6c4fb6234639ae322e3" UNIQUE ("user_id", "tweet_id"), CONSTRAINT "REL_35a6b05ee3b624d0de01ee5059" UNIQUE ("user_id"), CONSTRAINT "PK_890818d27523748dd36a4d1bdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follows" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid, "following_id" uuid, CONSTRAINT "UQ_d4d546cd279e12193c74e748829" UNIQUE ("user_id", "following_id"), CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "retweets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "tweet_id" uuid, "retweet_id" uuid, CONSTRAINT "UQ_1f1c4bdb62c7d2b7e6dfafc822b" UNIQUE ("tweet_id", "retweet_id"), CONSTRAINT "REL_46e00d46980777e594d2e4c8ac" UNIQUE ("retweet_id"), CONSTRAINT "PK_cde48d4abf7dfbf544172b6c256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_0a23c50228c2db732e3214682b0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_cdca270ba1f5105a09e64562fef" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_fa55441c19e4b7ea5c22556b33c" FOREIGN KEY ("comment_tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_35a6b05ee3b624d0de01ee50593" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_e667925fd1a26f12a864fd274b9" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_941d172275662c2b9d8b9f4270c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_c518e3988b9c057920afaf2d8c0" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "retweets" ADD CONSTRAINT "FK_887b2fa6f899ad9e3499dea9cf1" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "retweets" ADD CONSTRAINT "FK_46e00d46980777e594d2e4c8ac3" FOREIGN KEY ("retweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "retweets" DROP CONSTRAINT "FK_46e00d46980777e594d2e4c8ac3"`);
        await queryRunner.query(`ALTER TABLE "retweets" DROP CONSTRAINT "FK_887b2fa6f899ad9e3499dea9cf1"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_c518e3988b9c057920afaf2d8c0"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_941d172275662c2b9d8b9f4270c"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_e667925fd1a26f12a864fd274b9"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_35a6b05ee3b624d0de01ee50593"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_fa55441c19e4b7ea5c22556b33c"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_cdca270ba1f5105a09e64562fef"`);
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_0a23c50228c2db732e3214682b0"`);
        await queryRunner.query(`DROP TABLE "retweets"`);
        await queryRunner.query(`DROP TABLE "follows"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`DROP TABLE "contents"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "tweets"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
