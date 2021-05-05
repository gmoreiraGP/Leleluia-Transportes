import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript"
import * as uuid from 'uuid'

@Table
export class Invoice extends Model<Invoice> {

    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    id: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    company:  string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    cnpj: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    numberInvoice: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status: string

}

