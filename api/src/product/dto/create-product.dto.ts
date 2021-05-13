import { IsDecimal, IsNumber, IsString, ValidateNested } from "class-validator"
import { Invoice } from "src/invoice/entities/invoice.entity"

export class CreateProductDto {
    @IsString()
    name: string
    
    @IsDecimal()
    price: number
    
    @IsNumber()
    quantity: number

    @ValidateNested()
    invoice: Invoice
}
 