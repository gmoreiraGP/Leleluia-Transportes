import { Invoice } from "src/invoice/entities/invoice.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'text'
    })
    name: string
    
    @Column({
        type: 'decimal'
    })
    price: number
    
    @Column({
        type: 'int'
    })
    quantity: number

    @ManyToOne(() => Invoice, invoice => invoice.products)
    invoice: Invoice;
}
