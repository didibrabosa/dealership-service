import { IsNotEmpty, IsString } from "class-validator";

export class GetByTypeDto {
    @IsNotEmpty()
    @IsString()
    type: string;
}