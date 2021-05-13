import { IsEnum, IsString, ValidateNested } from "class-validator"
import { Address } from "../../address/entities/address.entity"
import { EnumStatus } from '../entities/invoice.entity'

export class CreateInvoiceDto {
    @IsString()
    empresa:  string

    @IsString()
    inscricaoEstadual: string

    @IsString()
    cnpj: string

    @IsEnum(EnumStatus)
    status: EnumStatus

    @ValidateNested()
    address?: Address
    
    @ValidateNested()
    destiny?: Address
}
