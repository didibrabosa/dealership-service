import { IsNotEmpty, IsString } from "class-validator";

export class CreateVehicleDto {
    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsString()
    year: string;
    
    @IsNotEmpty()
    @IsString()
    plate: string;
}

export class CreateVehicleResponseDto {
    id: string;
}