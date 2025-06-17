import { Logger } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { UpdateVehcileDto } from '../dtos/update-vehicle.dto';

export class VehicleRepository extends Repository<VehicleEntity> {
  private readonly logger = new Logger(VehicleRepository.name);
  constructor(menager: EntityManager) {
    super(VehicleEntity, menager);
  }
  async createVehicle(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
    const newVehicle = this.create(vehicle);
    this.logger.log('A new vehicle was created in DataBase');
    return await this.save(newVehicle);
  }

  async getAllVehicles(): Promise<VehicleEntity[]> {
    this.logger.log('Getting every vehicle in DataBase');
    return await this.find();
  }

  async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
    this.logger.log('Getting a vehicle in DataBase by type');
    return await this.find({
      where: {
        type,
      },
    });
  }

  async getVehicleById(id: string): Promise<VehicleEntity[]> {
    this.logger.log('Getting a vehicle in DataBase by id');
    return await this.find({
      where: {
        id,
      },
    });
  }

  async updateVehiclePartialById(
    id: string,
    partial: Partial<UpdateVehcileDto>,
  ): Promise<VehicleEntity> {
    await this.update(id, partial);
    this.logger.log('Vehicle updated in DataBase');
    return this.findOneOrFail({
      where: {
        id,
      },
    });
  }

  async softDeleteVehicleById(id: string): Promise<void> {
    this.logger.log('Deactivating a vehicle in DataBase');
    await this.softDelete(id);
  }

  async restoreVehicleById(id: string): Promise<void> {
    this.logger.log('Activating a vehicle in DataBase');
    await this.restore(id);
  }
}
