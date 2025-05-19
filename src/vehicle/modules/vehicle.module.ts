import { Module } from '@nestjs/common';
import { VehicleController } from '../controller/vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from '../entities/vehicle.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VehicleEntity])],
    //adicionar a parte do service de vehicles aqui!
    controllers: [VehicleController],
})
export class VehicleModule {}