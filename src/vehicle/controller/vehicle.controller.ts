import { Body, Controller, Post, Get, Delete, VersioningType } from '@nestjs/common';
import { CreateVehicleDto, CreateVehicleResponseDto } from '../dtos/create-vehicle.dto';
import { VehicleService } from '../services/vehicle.service';
import { VehicleEntity } from '../entities/vehicle.entity';
import { GetByTypeDto } from '../dtos/get-by-type.dto';
import { GetByIdDto } from '../dtos/get-by-id.dtos';

@Controller('vehicle')
export class VehicleController {
    constructor(
        private vehicleService: VehicleService,
    ) {}

    @Post()
    async createVehicle(@Body() request: CreateVehicleDto): Promise<CreateVehicleResponseDto> {
        return await this.vehicleService.createVehicle(request);
    }

    @Get()
    async getAllVehicles(): Promise<VehicleEntity[]> {
        return await this.vehicleService.getAllVehicles();
    }

    @Get('type')
    async getVehiclesByType(@Body() request: GetByTypeDto): Promise<VehicleEntity[]> {
        return await this.vehicleService.getVehiclesByType(request.type);
    }

    @Get('id')
    async getVehiclesById(@Body() request: GetByIdDto): Promise<VehicleEntity[]> {
        return await this.vehicleService.getVehicleById(request.id);
    }
}