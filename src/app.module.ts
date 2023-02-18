import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardsModule } from './wizards/wizards.module';
import { SpellController } from './spell/spell.controller';
import { SpellModule } from './spell/spell.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ifenna:Pascal@cluster0.cwq1o5m.mongodb.net/?retryWrites=true&w=majority',
    ),
    WizardsModule,
    SpellModule,
  ],
  controllers: [AppController, SpellController],
  providers: [AppService],
})
export class AppModule {}
