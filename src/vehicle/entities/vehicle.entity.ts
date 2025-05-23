import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    color: string;

    @Column()
    year: string;

    @Column()
    plate: string;

    @Column('boolean', {default: true})
    active: boolean;
}