import { MigrationInterface, QueryRunner } from 'typeorm';
import { StatementRecurringType } from '../entity/StatementRecurringType';

export class seedStatementRecurringTypesTable1658841430465 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.insert(StatementRecurringType, [
			{ alias: 'once', name: 'Just once' },
			{ alias: 'daily', name: 'Every day' },
			{ alias: 'weekdays', name: 'Every weekday' },
			{ alias: 'weekends', name: 'On weekends' },
			{ alias: 'weekly', name: 'Every week' },
			{ alias: 'two-weeks', name: 'Every other week' },
			{ alias: 'monthly', name: 'Every month' },
			{ alias: 'two-months', name: 'Every 2 months' },
			{ alias: 'three-months', name: 'Every 3 months' },
			{ alias: 'six-months', name: 'Every 6 months' },
			{ alias: 'yearly', name: 'Every year' },
		]);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
