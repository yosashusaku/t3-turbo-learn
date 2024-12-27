import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TRPCModule } from 'nestjs-trpc';
import { TrpcPanelController } from './panel/trpc-panel.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
  ],
  controllers: [AppController, TrpcPanelController],
  providers: [AppService],
})
export class AppModule {}
