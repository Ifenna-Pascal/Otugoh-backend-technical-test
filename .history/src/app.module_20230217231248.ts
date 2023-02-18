import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardsController } from './wizards/wizards.controller';
// import { WizardsService } from './wizards/wizards.service';
import { WizardsModule } from './wizards/wizards.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ifenna:Pascal@cluster0.cwq1o5m.mongodb.net/?retryWrites=true&w=majority',
    ),
    WizardsModule,
  ],
  controllers: [AppController, WizardsController],
  providers: [AppService],
})
export class AppModule {}
