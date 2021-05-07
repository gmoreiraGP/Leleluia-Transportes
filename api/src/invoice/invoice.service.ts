import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  findOne(id: string) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
} 
