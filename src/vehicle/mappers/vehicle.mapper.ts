import { CreateVehicleDto, CreateVehicleResponseDto } from "../dtos/create-vehicle.dto";
import { VehicleEntity } from "../entities/vehicle.entity";

export class VehicleMapper {
    static toDto(entity: VehicleEntity): CreateVehicleResponseDto {
        return {
            id: entity.id,
        };
    }

    static toEntity(dto: CreateVehicleDto): VehicleEntity {
        const entity = new VehicleEntity();
        entity.type = dto.type;
        entity.brand = dto.brand;
        entity.model = dto.model;
        entity.color = dto.color;
        entity.year = dto.year;
        entity.plate = dto.plate;
        return entity;
    }
}