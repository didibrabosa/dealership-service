import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'The type of the vehicle',
    example: 'Car',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ description: 'The brand of the vehicle', example: 'Ford' })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({ description: 'The model of the vehicle', example: 'Mustang' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ description: 'The color of the vehicle', example: 'Red' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'The manufacturing year of the vehicle',
    example: 2022,
  })
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'The license plate of the vehicle',
    example: 'ABC-1234',
  })
  @IsString()
  @IsNotEmpty()
  @Length(7, 8)
  plate: string;
}

export class CreateVehicleResponseDto {
  @ApiProperty()
  id: number;
}
