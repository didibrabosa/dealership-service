import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

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
}