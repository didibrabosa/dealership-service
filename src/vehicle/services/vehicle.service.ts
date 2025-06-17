import { Injectable, Logger } from '@nestjs/common';
import {
  CreateVehicleDto,
  CreateVehicleResponseDto,
} from '../dtos/create-vehicle.dto';
import { DataSource } from 'typeorm';
import { VehicleRepository } from '../repositories/vehicle.repository';
import { VehicleMapper } from '../mappers/vehicle.mapper';
import { VehicleEntity } from '../entities/vehicle.entity';
import { UpdateVehcileDto } from '../dtos/update-vehicle.dto';

@Injectable()
export class VehicleService {
  private readonly logger = new Logger(VehicleService.name);
  private vehicleRepository: VehicleRepository;
  constructor(private dataSource: DataSource) {
    this.vehicleRepository = new VehicleRepository(dataSource.manager);
  }

  async createVehicle(
    dto: CreateVehicleDto,
  ): Promise<CreateVehicleResponseDto> {
    this.logger.log('Transforming the dto into an entity');
    const entity = VehicleMapper.toEntity(dto);
    this.logger.log('Creating a new vehicle in DataBase with this data');
    const data = await this.vehicleRepository.createVehicle(entity);
    this.logger.log('Transforming the entity into an dto');
    return VehicleMapper.toDto(data);
  }

  async getAllVehicles(): Promise<VehicleEntity[]> {
    return await this.vehicleRepository.getAllVehicles();
  }

  async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
    this.logger.log(`Getting a vehicle of type ${type}`);
    return await this.vehicleRepository.getVehiclesByType(type);
  }

  async getVehicleById(id: string): Promise<VehicleEntity[]> {
    this.logger.log(`Getting a vehicle of type ${id}`);
    return await this.vehicleRepository.getVehicleById(id);
  }

  async updateVehiclePartialById(
    id: string,
    dto: UpdateVehcileDto,
  ): Promise<VehicleEntity> {
    this.logger.log(`Updating a vehicle with id ${id}`);
    return await this.vehicleRepository.updateVehiclePartialById(id, dto);
  }

  async softDeleteVehicleById(id: string): Promise<void> {
    this.logger.log(`Deactivating a vehicle with id ${id}`);
    return await this.vehicleRepository.softDeleteVehicleById(id);
  }

  async restoreVehicleById(id: string): Promise<void> {
    this.logger.log(`Activating a vehicle with id ${id}`);
    await this.vehicleRepository.restoreVehicleById(id);
  }
}
