import { Address } from "../../address/entities/address.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "src/product/entities/product.entity";

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
    status: EnumStatus

    @OneToOne(() => Address, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    address: Address

    @OneToOne(() => Address, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    destiny: Address

    @OneToMany(() => Product, product => product.invoice)
    products: Product[];
}

export enum EnumStatus {
    Separation = 'separation',
    Transit = 'transit',
    Delivered = 'delivered',
}