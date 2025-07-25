import { CreateVehicleResponseDto } from '../dtos/create-vehicle.dto';
import { UpdateVehicleResponseDto } from '../dtos/update-vehicle.dto';
import { VehicleEntity } from '../entities/vehicle.entity';

export class VehicleMapper {
  static toCreateResponseDto(entity: VehicleEntity): CreateVehicleResponseDto {
    return {
      id: entity.id,
    };
  }

  static toUpdateResponseDto(entity: VehicleEntity): UpdateVehicleResponseDto {
    return {
      id: entity.id,
    };
  }

  // Desnecessário no momento, mas pode se tornar útil em breve.
  // static toEntity(dto: CreateVehicleDto): VehicleEntity {
  //   const entity = new VehicleEntity();
  //   entity.type = dto.type;
  //   entity.brand = dto.brand;
  //   entity.model = dto.model;
  //   entity.color = dto.color;
  //   entity.year = dto.year;
  //   entity.plate = dto.plate;
  //   return entity;
  // }
}
