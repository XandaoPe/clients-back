import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/user.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DATABASE_URL } from 'env';
import { Casas, CasasSchema } from './casas/casas.model';
import { CasasController } from './casas/casas.controller';
import { CasasService } from './casas/casas.service';

console.log(DATABASE_URL)

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Casas.name, schema: CasasSchema }]),
  ],
  controllers: [UsersController, CasasController],
  providers: [UsersService, CasasService],
})

export class AppModule {}