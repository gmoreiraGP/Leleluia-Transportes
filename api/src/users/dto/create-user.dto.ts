import { IsString, ValidateNested } from "class-validator"
import { Profile } from "src/profile/entities/profile.entity"

export class CreateUserDto {
    @IsString()
    email: string
    
    @IsString()
    password: string

    @ValidateNested()
    profile?: Profile
}
