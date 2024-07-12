import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateUserSettingsDto {
  @IsOptional()
  @IsBoolean()
  receiveNotification?: boolean;

  @IsOptional()
  @IsBoolean()
  receiveEmail?: boolean;

  @IsOptional()
  @IsBoolean()
  receiveSMS?: boolean;
}
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsString()
  @IsOptional()
  displayname?: string;

  // setting user schema is one to one with userschema
  @IsOptional()
  // Because this is not a validator but another schema
  @ValidateNested()
  settings?: CreateUserSettingsDto;
}
