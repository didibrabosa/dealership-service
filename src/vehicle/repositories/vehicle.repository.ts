import { EntityManager, Repository } from "typeorm";
import { VehicleEntity } from "../entities/vehicle.entity";
import { VehicleRequestDto } from "../dtos/vehicle.request.dto";

export class VehicleRepository extends Repository<VehicleEntity> {
    constructor(menager: EntityManager) {
        super(VehicleEntity, menager);
    }

    async createVehicle(vehicle: VehicleRequestDto): Promise<VehicleEntity> {
        const newVehicle = this.create(vehicle);
        return this.save(newVehicle);
    }

    //getAllVehicles(type)
}