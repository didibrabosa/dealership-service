import { Body, Controller, Post, Get, Delete, VersioningType } from '@nestjs/common';
import { VehicleResponseDto } from '../dtos/vehicle.response.dto';
import { VehicleRequestDto } from '../dtos/vehicle.request.dto';
import { VehicleEntity } from '../entities/vehicle.entity';
import { VehicleService } from '../services/vehicle.service';

@Controller('vehicle')
export class VehicleController {
    constructor(
        private vehicleService: VehicleService,
    ) {}

    @Post()
    async create(@Body() vehicleRequestDto: VehicleRequestDto): Promise<VehicleResponseDto> {
        const vehicle = await this.vehicleService.create(vehicleRequestDto);

        const response: VehicleResponseDto = {
            id: vehicle.id,
            type: vehicle.type,
            brand: vehicle.brand,
            model: vehicle.model,
        };

        return response;
    }
}