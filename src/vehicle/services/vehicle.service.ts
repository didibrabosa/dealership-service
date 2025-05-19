import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VehicleEntity } from '../entities/vehicle.entity';
import { VehicleRequestDto } from "../dtos/vehicle.request.dto";

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(VehicleEntity)
        private vehicleRepository: Repository<VehicleEntity>,
    ) {}

    async create(vehicleRequestDto: VehicleRequestDto): Promise<VehicleEntity> {
        const vehicle = await this.vehicleRepository.create(vehicleRequestDto);
        return this.vehicleRepository.save(vehicle);
    }
    findall(): Promise<VehicleEntity[]> {
        return this.vehicleRepository.find();
    }

    findOne(id: string): Promise<VehicleEntity | null> {
        return this.vehicleRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.vehicleRepository.delete(id)
    }
}