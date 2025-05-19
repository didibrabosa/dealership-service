import { Body, Controller, Post } from '@nestjs/common';
import { VehicleDto } from '../dtos/vehicle.response.dto';

@Controller('vehicle')
export class VehicleController {
    @Post()
    create(@Body() vehicle: VehicleDto){
        console.log(vehicle)
    }
}