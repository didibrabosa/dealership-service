import { Body, Controller, Post, Get, Delete, VersioningType } from '@nestjs/common';
import { VehicleResponseDto } from '../dtos/vehicle.response.dto';
import { VehicleRequestDto } from '../dtos/vehicle.request.dto';
import { VehicleService } from '../services/vehicle.service';

@Controller('vehicle')
export class VehicleController {
    constructor(
        private vehicleService: VehicleService,
    ) {}

    @Post()
    async createVehicle(@Body() request: VehicleRequestDto): Promise<VehicleResponseDto> {
        return this.vehicleService.createVehicle(request);
    }
}