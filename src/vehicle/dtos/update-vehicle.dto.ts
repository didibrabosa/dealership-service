import { IsOptional, IsString } from 'class-validator';

export class UpdateVehcileDto {
  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  year: string;

  @IsOptional()
  @IsString()
  plate: string;
}
