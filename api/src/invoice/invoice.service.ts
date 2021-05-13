import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepo: Repository<Invoice>,
  ) {}


  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepo.create(createInvoiceDto)

    return await this.invoiceRepo.save(invoice)
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepo.find()
  }

  async findOne(id: string): Promise<Invoice> {
    return await this.invoiceRepo.findOne(id)
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    const toUpdated = await this.invoiceRepo.findOne(id)
    const profileUpdated = Object.assign(toUpdated, updateInvoiceDto)
   
    return await this.invoiceRepo.save(profileUpdated)
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.invoiceRepo.delete(id)
  }
} 
