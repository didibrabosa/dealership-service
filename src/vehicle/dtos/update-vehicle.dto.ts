import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
  @ApiProperty({
    description: 'The type of the vehicle',
    example: 'Car',
  })
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty({ description: 'The brand of the vehicle', example: 'Ford' })
  @IsOptional()
  @IsString()
  brand: string;

  @ApiProperty({ description: 'The model of the vehicle', example: 'Mustang' })
  @IsOptional()
  @IsString()
  model: string;

  @ApiProperty({ description: 'The color of the vehicle', example: 'Red' })
  @IsOptional()
  @IsString()
  color: string;

  @ApiProperty({
    description: 'The manufacturing year of the vehicle',
    example: 2022,
  })
  @IsOptional()
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'The license plate of the vehicle',
    example: 'ABC-1234',
  })
  @IsOptional()
  @IsString()
  plate: string;
}

export class UpdateVehicleResponseDto {
  @ApiProperty()
  id: number;
}
