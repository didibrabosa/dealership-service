import { Injectable } from "@nestjs/common";
import { CreateVehicleDto, CreateVehicleResponseDto } from "../dtos/create-vehicle.dto";
import { DataSource } from "typeorm";
import { VehicleRepository } from "../repositories/vehicle.repository";
import { VehicleMapper } from "../mappers/vehicle.mapper";
import { VehicleEntity } from "../entities/vehicle.entity";
import { UpdateVehcileDto } from "../dtos/update-vehicle.dto";

@Injectable()
export class VehicleService {
    
    private vehicleRepository: VehicleRepository;

    constructor(
        private dataSource: DataSource
    ) {
        this.vehicleRepository = new VehicleRepository(dataSource.manager);
    }

    async createVehicle(dto: CreateVehicleDto): Promise<CreateVehicleResponseDto> {
        const entity = VehicleMapper.toEntity(dto);
        const data = await this.vehicleRepository.createVehicle(entity);
        return VehicleMapper.toDto(data);
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

    async updateVehiclePartialById(id: string, dto: UpdateVehcileDto): Promise<VehicleEntity> {
        return await this.vehicleRepository.updateVehiclePartialById(id, dto);
    }
}