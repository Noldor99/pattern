import { Module, forwardRef } from '@nestjs/common'
import { RolesController } from './roles.controller'
import { RolesService } from './roles.service'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from 'src/user/user.module'
import { Role } from './role.entity'


@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    ConfigModule,
    JwtModule,
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Role])
  ],
  exports: [RolesService],
})
export class RolesModule { }
