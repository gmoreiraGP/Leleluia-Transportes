import { Address } from "../../address/entities/address.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('invoice')
export class Invoice {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "text",
        nullable: false
    })
    empresa:  string

    @Column({
        type: "text",
        nullable: false
    })
    inscricaoEstadual: string

    @Column({
        type: "text",
        nullable: false
    })
    cnpj: string

    @Column({
        type: "text",
        nullable: false ,
        default:  'separation'
    })
    status: Status

    @OneToOne(() => Address, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    address: Address

}

enum Status {
    Separation = 'separation',
    Transit = 'transit',
    Delivered = 'delivered',
}