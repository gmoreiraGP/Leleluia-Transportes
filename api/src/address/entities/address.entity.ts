import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "text",
    })
    street:  string

    @Column({
        type: "int",
    })
    number: number

    @Column({
        type: "text",
    })
    complement: string

    @Column({
        type: "int",
    })
    cep: number

    @Column({
        type: "text",
    })
    district: string

    @Column({
        type: "text",
    })
    city: string

    @Column({
        type: "text",
    })
    country: string
    
    @Column({
        type: 'text',
        default: 'user-address'
    })
    type: AddressType
}

enum AddressType {
    UserAddress = 'user-address',
    CompanyAddress = 'company-address',
    DestinyAdress = 'destiny-address'
}
