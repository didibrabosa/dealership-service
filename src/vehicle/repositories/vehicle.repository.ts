import { EntityManager, Repository } from 'typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { UpdateVehcileDto } from '../dtos/update-vehicle.dto';

export class VehicleRepository extends Repository<VehicleEntity> {
  constructor(menager: EntityManager) {
    super(VehicleEntity, menager);
  }

  async createVehicle(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
    const newVehicle = this.create(vehicle);
    return await this.save(newVehicle);
  }

  async getAllVehicles(): Promise<VehicleEntity[]> {
    return await this.find();
  }

  async getVehiclesByType(type: string): Promise<VehicleEntity[]> {
    return await this.find({
      where: {
        type,
      },
    });
  }

  async getVehicleById(id: string): Promise<VehicleEntity[]> {
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
    return this.findOneOrFail({
      where: {
        id,
      },
    });
  }

  async softDeleteVehicleById(id: string): Promise<void> {
    await this.softDelete(id);
  }

  async restoreVehicleById(id: string): Promise<void> {
    await this.restore(id);
  }
}
