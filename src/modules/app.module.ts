import { Module } from '@nestjs/common';
import { VehicleModule } from '../vehicle/modules/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { VehicleEntity } from 'src/vehicle/entities/vehicle.entity';

@Module({
  imports: [
    VehicleModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'dealership-database',
      entities: [VehicleEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
