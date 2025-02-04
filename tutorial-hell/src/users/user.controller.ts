import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';

@Controller('users')
export class UsersController {
  // private readonly user: UserEntity[] = [];
  //@Method -> HTTP METHOD
  @Get() // this by default watches /users/ since it's declared in @Controller
  findAll(): string[] {
    return ['Ahmed', 'Khaled', 'Fatma'];
  }
  @Get(':username') //Parameter -> dynamic id -> :id
  findOne(@Param('username') username: string): string {
    return username;
  }

  // create(@Req() req: Request): string {
  //   console.log(req.body);
  //}
  @Post('new') // URL: /users/new route
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
  @Patch(':username')
  update(@Body() updateUserDto: UpdateUserDto): string {
    return `Update user ${updateUserDto.username}`;
  }

  @Delete(':username')
  remove(@Param('username') username: string): string {
    return `removed username ${username}`;
  }
}
