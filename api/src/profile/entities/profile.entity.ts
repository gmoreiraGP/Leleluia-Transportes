import { Address } from "src/address/entities/address.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "text",
        nullable: false,
        unique: true
    })
    firstName:  string

    @Column({
        type: "text",
        nullable: false,
    })
    lastName:  string

    @Column({
        type: "text",
    })
    bio:  string
    
    @Column({
        type: "text",
    })
    social:  Array<string>

    @OneToOne(() => Address, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    address: Address
}
