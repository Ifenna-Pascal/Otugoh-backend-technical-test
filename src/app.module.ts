import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardsModule } from './wizards/wizards.module';
import { SpellModule } from './spell/spell.module';
import { ElixirsModule } from './elixirs/elixirs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    WizardsModule,
    SpellModule,
    ElixirsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
