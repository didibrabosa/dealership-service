import { Injectable } from "@nestjs/common";
import { VehicleRequestDto } from "../dtos/vehicle.request.dto";
import { DataSource } from "typeorm";
import { VehicleRepository } from "../repositories/vehicle.repository";
import { VehicleResponseDto } from "../dtos/vehicle.response.dto";
import { VehicleMapper } from "../mappers/vehicle.mapper";

@Injectable()
export class VehicleService {
    
    private vehicleRepository: VehicleRepository;

    constructor(
        private dataSource: DataSource
    ) {
        this.vehicleRepository = new VehicleRepository(dataSource.manager);
    }

    async createVehicle(request: VehicleRequestDto): Promise<VehicleResponseDto> {
        const response = await this.vehicleRepository.createVehicle(request);
        return VehicleMapper.toResponseDto(response);
    }

    //findall(): Promise<VehicleEntity[]> {
    //    return this.vehicleRepository.find();
    //}

    //findOne(id: string): Promise<VehicleEntity | null> {
    //    return this.vehicleRepository.findOneBy({ id });
    //}

    //async remove(id: string): Promise<void> {
    //    await this.vehicleRepository.delete(id)
   // }
}