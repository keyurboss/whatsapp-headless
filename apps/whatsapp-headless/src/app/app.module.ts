import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UUIDDefinition } from 'graphql-scalars';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug:environment.production,
      playground:environment.production,
      autoSchemaFile: true,
      typeDefs: [UUIDDefinition],
      introspection: true,
      installSubscriptionHandlers: true,
    }),
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
