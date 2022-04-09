import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { CUSTOMER_PRODUCER } from '../../kafka/producers/producers';
import { TOPICS } from '../../kafka/topics/topics';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Client(CUSTOMER_PRODUCER)
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf(TOPICS.customer);
    await this.client.connect();
  }

  @Get()
  getCustomers() {
    return this.client.send(TOPICS.customer, 'RODOU A PARTIR DAQUI ESSE SAFADO');
  }

  @MessagePattern(TOPICS.createCustomer)
  createCustomer(@Payload() data: any) {
    console.warn('CUSTOMER CREATE', data);

    return this.customerService.craeteCustomer();
  }
}
