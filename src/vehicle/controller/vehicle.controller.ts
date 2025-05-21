import { Body, Controller, Post, Get, Delete, VersioningType } from '@nestjs/common';
import { VehicleResponseDto } from '../dtos/vehicle.response.dto';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { VehicleService } from '../services/vehicle.service';
import { VehicleEntity } from '../entities/vehicle.entity';
import { GetByTypeDto } from '../dtos/get-by-type.dto';
import { request } from 'http';
import { GetByIdDto } from '../dtos/get-by-id.dtos';

@Controller('vehicle')
export class VehicleController {
    constructor(
        private vehicleService: VehicleService,
    ) {}

    @Post()
    async createVehicle(@Body() request: CreateVehicleDto): Promise<VehicleResponseDto> {
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