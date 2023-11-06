// user.dto.ts
import { IsString, IsInt, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddressDto {
  @IsString()
  state: string;

  @IsString()
  city: string;
}

export class UserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
