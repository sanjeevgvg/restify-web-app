import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question_type')
export class QuestionType {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @CreateDateColumn({ name: 'created_at' })
    public created_at: Date;
}
