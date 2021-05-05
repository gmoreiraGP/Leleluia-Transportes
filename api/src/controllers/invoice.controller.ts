import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InvoiceService } from "src/services/invoice.service";
import {Invoice} from '../models/invoice.model'

@Controller('invoices')
export class InvoiceController{
   constructor(private invoiceService: InvoiceService){}

    @Get()
    async getAll(): Promise<Invoice[]> {
        return this.invoiceService.getAll()
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Invoice> {
        return this.invoiceService.getOne(params.id)
    }

    @Post()
    async store(@Body() invoice: Invoice) {
        this.invoiceService.store(invoice)
    }

    @Put()
    async edit(@Body() invoice: Invoice): Promise<[number, Invoice[]]> {
        return this.invoiceService.edit(invoice)
    }

    @Delete(':id')
    async delete(@Param() params) {
       this.invoiceService.delete(params.id)
    }
}   