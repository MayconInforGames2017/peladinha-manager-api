import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { GroupsModule } from './modules/groups/groups.module';
import { PlayersModule } from './modules/players/players.module';
import { MatchesModule } from './modules/matches/matches.module';
import { ConfirmationsModule } from './modules/confirmations/confirmations.module';
import { WhatsappModule } from './modules/whatsapp/whatsapp.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    AuthModule, 
    UsersModule, 
    GroupsModule, 
    PlayersModule, 
    MatchesModule, 
    ConfirmationsModule, 
    WhatsappModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
