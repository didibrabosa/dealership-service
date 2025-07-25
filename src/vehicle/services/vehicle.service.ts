import { Injectable, Logger } from '@nestjs/common';
import {
  CreateVehicleDto,
  CreateVehicleResponseDto,
} from '../dtos/create-vehicle.dto';
import { VehicleRepository } from '../repositories/vehicle.repository';
import { VehicleMapper } from '../mappers/vehicle.mapper';
import { VehicleEntity } from '../entities/vehicle.entity';
import {
  UpdateVehicleDto,
  UpdateVehicleResponseDto,
} from '../dtos/update-vehicle.dto';

@Injectable()
export class VehicleService {
  private readonly logger = new Logger(VehicleService.name);
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async createVehicle(
    dto: CreateVehicleDto,
  ): Promise<CreateVehicleResponseDto> {
    this.logger.log('Creating a new vehicle in DataBase with this data');
    const data = await this.vehicleRepository.createVehicle(dto);

    this.logger.log('Transforming the entity into an dto');
    return VehicleMapper.toCreateResponseDto(data);
  }

  async getAllVehicles(): Promise<VehicleEntity[]> {
    return await this.vehicleRepository.getAllVehicles();
  }

  async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
    this.logger.log(`Getting a vehicle of type ${type}`);
    return await this.vehicleRepository.getVehiclesByType(type);
  }

  async getVehicleById(id: number): Promise<VehicleEntity[]> {
    this.logger.log(`Getting a vehicle of type ${id}`);
    return await this.vehicleRepository.getVehicleById(id);
  }

  async updateVehiclePartialById(
    id: number,
    dto: UpdateVehicleDto,
  ): Promise<UpdateVehicleResponseDto> {
    this.logger.log(`Updating a vehicle with id ${id}`);
    const data = await this.vehicleRepository.updateVehiclePartialById(id, dto);

    this.logger.log('Transforming the entity into an dto');
    return VehicleMapper.toUpdateResponseDto(data);
  }

  async softDeleteVehicleById(id: number): Promise<void> {
    this.logger.log(`Deactivating a vehicle with id ${id}`);
    return await this.vehicleRepository.softDeleteVehicleById(id);
  }

  async restoreVehicleById(id: number): Promise<void> {
    this.logger.log(`Activating a vehicle with id ${id}`);
    await this.vehicleRepository.restoreVehicleById(id);
  }
}
