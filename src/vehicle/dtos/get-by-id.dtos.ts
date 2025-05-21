import { IsNotEmpty, IsString } from "class-validator";

export class GetByIdDto {
    @IsNotEmpty()
    @IsString()
    id: string;
}