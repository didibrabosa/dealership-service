import { EntityManager, Repository } from "typeorm";
import { VehicleEntity } from "../entities/vehicle.entity";

export class VehicleRepository extends Repository<VehicleEntity> {
    constructor(menager: EntityManager) {
        super(VehicleEntity, menager);
    }

    createVehicle(vehicle: VehicleEntity) {
        const newVehicle = this.create(vehicle);
        return this.save(newVehicle);
    }

    //getAllVehicles(type)
}