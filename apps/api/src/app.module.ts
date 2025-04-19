import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TRPCModule } from 'nestjs-trpc';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
