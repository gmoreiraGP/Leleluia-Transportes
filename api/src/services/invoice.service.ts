import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Invoice } from "src/models/invoice.model";

@Injectable()
export class InvoiceService {
   constructor(
       @InjectModel(Invoice)
       private invoiceModel: typeof Invoice
   ){}

    async getAll(): Promise<Invoice[]>{
        return this.invoiceModel.findAll()
    }

    async getOne(id: string): Promise<Invoice> {
        return this.invoiceModel.findByPk(id)
    }

    store(invoice: Invoice){
        this.invoiceModel.create(invoice)
    }

    async edit(invoice: Invoice): Promise<[number, Invoice[]]> {
        return this.invoiceModel.update(invoice, {
            where: {
                id: invoice.id
            }
        })
    }

    async delete(id: string){
        const invoice: Invoice = await this.getOne(id)
        invoice.destroy()
    }
}