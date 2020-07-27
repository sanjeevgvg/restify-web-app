import { OptionResponse, Question } from '../models/question';
import { QuestionType } from '../models/question-type';
import { getRepository, MigrationInterface } from 'typeorm';

export class CreateQuestionsSeeder1595828514229 implements MigrationInterface {
    public async up(): Promise<void> {
        const questionType = await getRepository(QuestionType).findOne({
            name: 'single-select',
        });
        if (questionType) {
            const question = new Question();
            // eslint-disable-next-line @typescript-eslint/camelcase
            question.type_id = questionType.id;
            const options: OptionResponse[] = [];
            options.push({ option: 'red' });
            options.push({ option: 'green' });
            options.push({ option: 'blue' });
            question.options = options;
            question.label = 'your favorite color?';

            await getRepository(Question).save(question);
        }

        const questionTypeInput = await getRepository(QuestionType).findOne({
            name: 'input',
        });
        if (questionTypeInput) {
            const question = new Question();
            // eslint-disable-next-line @typescript-eslint/camelcase
            question.type_id = questionTypeInput.id;
            question.label = 'tell about yourself';

            await getRepository(Question).save(question);
        }
    }

    public async down(): Promise<void> {
        await getRepository(Question).delete({
            label: 'your favorite color?',
        });
        await getRepository(Question).delete({
            label: 'tell about yourself',
        });
    }
}
