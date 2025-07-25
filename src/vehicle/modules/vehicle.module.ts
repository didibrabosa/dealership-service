import { Module } from '@nestjs/common';
import { VehicleController } from '../controller/vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { VehicleService } from '../services/vehicle.service';
import { VehicleRepository } from '../repositories/vehicle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  controllers: [VehicleController],
  providers: [VehicleService, VehicleRepository],
})
export class VehicleModule {}
