import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import {
  CreateVehicleDto,
  CreateVehicleResponseDto,
} from '../dtos/create-vehicle.dto';
import { VehicleService } from '../services/vehicle.service';
import { VehicleEntity } from '../entities/vehicle.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorResponseDto } from '../dtos/error-response.dto';
import {
  UpdateVehicleDto,
  UpdateVehicleResponseDto,
} from '../dtos/update-vehicle.dto';

@ApiTags('Vehicles')
@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @ApiOperation({
    summary: 'Create a new Vehicle',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Vehicle created with success',
    type: CreateVehicleResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error in create a new Vehicle',
    type: ErrorResponseDto,
  })
  @Post()
  async createVehicle(
    @Body() vehicle: CreateVehicleDto,
  ): Promise<CreateVehicleResponseDto> {
    return await this.vehicleService.createVehicle(vehicle);
  }

  @ApiOperation({
    summary: 'Get all Vehicles',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Get()
  async getAllVehicles(): Promise<VehicleEntity[]> {
    return await this.vehicleService.getAllVehicles();
  }

  @ApiOperation({
    summary: 'Get a Vehicle by type',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Get('/type/:typeVehicle')
  async getVehiclesByType(
    @Param('typeVehicle') type: string,
  ): Promise<VehicleEntity[]> {
    return await this.vehicleService.getVehiclesByType(type);
  }

  @ApiOperation({
    summary: 'Get a Vehicle by Id',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Get('/id/:idVehicle')
  async getVehiclesById(
    @Param('idVehicle') id: number,
  ): Promise<VehicleEntity[]> {
    return await this.vehicleService.getVehicleById(id);
  }

  @ApiOperation({
    summary: 'Update a Vehicle',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UpdateVehicleResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Patch(':id')
  async updateVehicle(
    @Param('id') id: number,
    @Body() request: UpdateVehicleDto,
  ): Promise<UpdateVehicleResponseDto> {
    return await this.vehicleService.updateVehiclePartialById(id, request);
  }

  @ApiOperation({
    summary: 'Disable a Vehicle',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Delete('/delete/:id')
  async softDeleteVehicleById(@Param('id') id: number): Promise<void> {
    return await this.vehicleService.softDeleteVehicleById(id);
  }

  @ApiOperation({
    summary: 'Reactive a Vehicle',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponseDto,
  })
  @Patch('/restore/:id')
  async restoreVehicleById(@Param('id') id: number): Promise<void> {
    return await this.vehicleService.restoreVehicleById(id);
  }
}
