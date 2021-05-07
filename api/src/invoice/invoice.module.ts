import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { CustomInvoiceRepository } from './invoice.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, CustomInvoiceRepository])],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}
