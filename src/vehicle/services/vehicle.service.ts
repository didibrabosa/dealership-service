import { Injectable } from "@nestjs/common";
import { CreateVehicleDto } from "../dtos/create-vehicle.dto";
import { DataSource } from "typeorm";
import { VehicleRepository } from "../repositories/vehicle.repository";
import { VehicleResponseDto } from "../dtos/vehicle.response.dto";
import { VehicleMapper } from "../mappers/vehicle.mapper";
import { VehicleEntity } from "../entities/vehicle.entity";

@Injectable()
export class VehicleService {
    
    private vehicleRepository: VehicleRepository;

    constructor(
        private dataSource: DataSource
    ) {
        this.vehicleRepository = new VehicleRepository(dataSource.manager);
    }

    async createVehicle(request: CreateVehicleDto): Promise<VehicleResponseDto> {
        const response = await this.vehicleRepository.createVehicle(request);
        return VehicleMapper.toResponseDto(response);
    }

    async getAllVehicles(): Promise<VehicleEntity[]> {
        return await this.vehicleRepository.getAllVehicles();
    }

    async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
        return await this.vehicleRepository.getVehiclesByType(type);
    }

    async getVehicleById(id: string): Promise<VehicleEntity[]> {
        return await this.vehicleRepository.getVehicleById(id);
    }
}