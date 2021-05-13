import { IsEnum, IsInt, IsString } from "class-validator"
import { EnumAddressType } from "../entities/address.entity"

export class CreateAddressDto {
    @IsString()
    public street:  string

    @IsInt()
    public number: number

    @IsString()
    public complement: string

    @IsInt()
    public cep: number

    @IsString()
    public district: string

    @IsString()
    public city: string
    
    @IsString()
    public country: string

    @IsEnum(EnumAddressType)
    public type: EnumAddressType
}
