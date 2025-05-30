import { Module } from '@nestjs/common';
import { VehicleController } from '../controller/vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';
import { VehicleService } from '../services/vehicle.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  exports: [TypeOrmModule],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
