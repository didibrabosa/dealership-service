import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import {
  CreateVehicleDto,
  CreateVehicleResponseDto,
} from '../dtos/create-vehicle.dto';
import { VehicleService } from '../services/vehicle.service';
import { VehicleEntity } from '../entities/vehicle.entity';
import { UpdateVehcileDto } from '../dtos/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  private readonly logger = new Logger(VehicleController.name);
  constructor(private vehicleService: VehicleService) {}

  @Post()
  async createVehicle(
    @Body() vehicle: CreateVehicleDto,
  ): Promise<CreateVehicleResponseDto> {
    this.logger.log(`POST http://localhost:3000/vehicle`);
    return await this.vehicleService.createVehicle(vehicle);
  }

  @Get()
  async getAllVehicles(): Promise<VehicleEntity[]> {
    return await this.vehicleService.getAllVehicles();
  }

  @Get('/type/:typeVehicle')
  async getVehiclesByType(
    @Param('typeVehicle') type: string,
  ): Promise<VehicleEntity[]> {
    return await this.vehicleService.getVehiclesByType(type);
  }

  @Get('/id/:idVehicle')
  async getVehiclesById(@Param('idVehicle') id): Promise<VehicleEntity[]> {
    return await this.vehicleService.getVehicleById(id);
  }

  @Patch(':id')
  async updateVehicle(
    @Param('id') id,
    @Body() request: UpdateVehcileDto,
  ): Promise<VehicleEntity> {
    return await this.vehicleService.updateVehiclePartialById(id, request);
  }

  @Delete('/id/:id')
  async softDeleteVehicleById(@Param('id') id): Promise<void> {
    return await this.vehicleService.softDeleteVehicleById(id);
  }

  @Patch('/restore/:id')
  async restoreVehicleById(@Param('id') id): Promise<void> {
    return await this.vehicleService.restoreVehicleById(id);
  }
}
