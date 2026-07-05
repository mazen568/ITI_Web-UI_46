import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: config) => {
        const configService = config as ConfigService;
        return {
          secret: configService.get<string>('JWT_SECRET') || '$$$$$MySecret$$$$$$',
          signOptions: {
            expiresIn: Number(configService.get<string | number>('JWT_EXPIRES_IN')) || 3600,
          },
        };
      },
    }),
  ],
  providers: [AuthService, UserRepository, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule, UserRepository],
})
export class AuthModule {}
type config = ConfigService; 
