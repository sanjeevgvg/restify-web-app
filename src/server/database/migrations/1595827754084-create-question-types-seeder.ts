import { QuestionType } from '../models/question-type';
import { getRepository, MigrationInterface } from 'typeorm';

export class CreateQuestionTypesSeeder1595827754084 implements MigrationInterface {
    public async up(): Promise<void> {
        const questionType1 = new QuestionType();
        questionType1.name = 'check-box';
        await getRepository(QuestionType).save(questionType1);

        const questionType2 = new QuestionType();
        questionType2.name = 'radio-box';
        await getRepository(QuestionType).save(questionType2);

        const questionType3 = new QuestionType();
        questionType3.name = 'single-select';
        await getRepository(QuestionType).save(questionType3);

        const questionType4 = new QuestionType();
        questionType4.name = 'input';
        await getRepository(QuestionType).save(questionType4);
    }

    public async down(): Promise<void> {
        await getRepository(QuestionType).delete({
            name: 'check-box',
        });
        await getRepository(QuestionType).delete({
            name: 'radio-box',
        });
        await getRepository(QuestionType).delete({
            name: 'single-select',
        });
        await getRepository(QuestionType).delete({
            name: 'input',
        });
    }
}
