import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty()
  readonly accessToken: string;

  @ApiProperty()
  readonly tokenType: string;

  @ApiProperty()
  readonly expiresIn: number;

  @ApiProperty()
  readonly userId: string;

  constructor(obj: { accessToken: string; tokenType: string; expiresIn: number, userId: string }) {
    this.accessToken = obj.accessToken;
    this.tokenType = obj.tokenType;
    this.expiresIn = obj.expiresIn;
    this.userId = obj.userId;
  }
}
