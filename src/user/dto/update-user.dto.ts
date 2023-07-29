import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // updateUserDTO te attribute gula na dileo chole as eita createUserDTO theke inherit kore
    firstName: string;
    lastName: string;
    age: number;
}
