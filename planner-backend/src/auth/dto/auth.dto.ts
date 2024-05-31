import { IsEmail, IsString, IsStrongPassword, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(8, {
		message: 'Your password must be at least 8 characters long'
	})
	@IsString()
	@IsStrongPassword()
	password: string
}
