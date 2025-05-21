import { CreateVehicleDto } from "../dtos/create-vehicle.dto";
import { VehicleResponseDto } from "../dtos/vehicle.response.dto";
import { VehicleEntity } from "../entities/vehicle.entity";

export class VehicleMapper {
    static toResponseDto(entity: VehicleEntity): VehicleResponseDto {
        return {
            id: entity.id,
            type: entity.type,
            brand: entity.brand,
            model: entity.model
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