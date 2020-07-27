import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { QuestionType } from './question-type';

export class OptionResponse {
    public option: string;
}

@Entity('question')
export class Question {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ManyToOne(type => QuestionType, (type): string => type.id)
    @JoinColumn({ name: 'type_id' })
    public type: QuestionType;

    @Column()
    public type_id: string;

    @Column()
    public label: string;

    @Column({ type: 'simple-json', nullable: true })
    public options: OptionResponse[];

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}
