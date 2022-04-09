import { ClientOptions, Transport } from '@nestjs/microservices';

export const CUSTOMER_CONSUMER: ClientOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:29092'],
    },
    consumer: {
      groupId: 'iwd-customers-consumer',
    },
  },
};
