import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElixirsController } from './elixirs.controller';
import { ElixirsSchema } from './elixirs.schema';
import { ElixirsService } from './elixirs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Elixirs', schema: ElixirsSchema }]),
  ],
  exports: [ElixirsService],
  controllers: [ElixirsController],
  providers: [ElixirsService],
})
export class ElixirsModule {}
