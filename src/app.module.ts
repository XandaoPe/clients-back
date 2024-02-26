import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/user.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DATABASE_URL } from 'env';

console.log(DATABASE_URL)

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://mota:xela2208@motacluster.vdoop.mongodb.net/?retryWrites=true&w=majority&appName=MotaCluster'),
    MongooseModule.forRoot(DATABASE_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})

export class AppModule {}