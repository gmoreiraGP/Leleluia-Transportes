import { IsArray, IsString, ValidateNested } from "class-validator"
import { Address } from '../../address/entities/address.entity'
export class CreateProfileDto {
    @IsString()
    firstName:  string
    
    @IsString()
    lastName:  string
    
    @IsString()
    bio:  string
    
    @IsArray()
    social:  Array<string>

    @ValidateNested()
    address?: Address
}
