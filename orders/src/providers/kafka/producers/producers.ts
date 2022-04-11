import { ClientOptions, Transport } from '@nestjs/microservices';

export const CUSTOMER_PRODUCER: ClientOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'kafkaSample',
      brokers: ['localhost:29092'],
    },
    consumer: {
      groupId: 'iwd-customers-consumer',
    },
  },
};
