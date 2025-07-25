import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { UpdateVehicleDto } from '../dtos/update-vehicle.dto';

@Injectable()
export class VehicleRepository {
  private readonly logger = new Logger(VehicleRepository.name);
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly vehicleRepository: Repository<VehicleEntity>,
  ) {}
  async createVehicle(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
    const newVehicle = this.vehicleRepository.create(vehicle);

    this.logger.log('A new vehicle was created in DataBase');
    return await this.vehicleRepository.save(newVehicle);
  }

  async getAllVehicles(): Promise<VehicleEntity[]> {
    this.logger.log('Getting every vehicle in DataBase');
    return await this.vehicleRepository.find();
  }

  async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
    this.logger.log('Getting a vehicle in DataBase by type');
    return await this.vehicleRepository.find({ where: { type } });
  }

  async getVehicleById(id: number): Promise<VehicleEntity[]> {
    this.logger.log('Getting a vehicle in DataBase by id');
    return await this.vehicleRepository.find({ where: { id } });
  }

  async updateVehiclePartialById(
    id: number,
    partial: Partial<UpdateVehicleDto>,
  ): Promise<VehicleEntity> {
    const vehicle = await this.getVehicleById(id);

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID "${id}" not found`);
    }
    await this.vehicleRepository.update(id, partial);
    this.logger.log('Vehicle updated in DataBase');

    return await this.vehicleRepository.findOneBy({ id });
  }

  async softDeleteVehicleById(id: number): Promise<void> {
    this.logger.log('Deactivating a vehicle in DataBase');
    await this.vehicleRepository.softDelete(id);
  }

  async restoreVehicleById(id: number): Promise<void> {
    this.logger.log('Activating a vehicle in DataBase');
    await this.vehicleRepository.restore(id);
  }
}
