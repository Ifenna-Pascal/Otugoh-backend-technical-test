import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardsModule } from './wizards/wizards.module';
import { SpellModule } from './spell/spell.module';
import { ElixirsModule } from './elixirs/elixirs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ifenna:Pascal@cluster0.cwq1o5m.mongodb.net/?retryWrites=true&w=majority',
    ),
    WizardsModule,
    SpellModule,
    ElixirsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
