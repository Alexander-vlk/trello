import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	IsStrongPassword,
	Max,
	Min,
	MinLength
} from 'class-validator'

export class PomodoroSettingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(10)
	intervalCount?: number
}

export class UserDto extends PomodoroSettingsDto {
	@IsEmail()
	@IsOptional()
	email: string

	@IsString()
	@IsOptional()
	name?: string

	@IsOptional()
	@MinLength(8, {
		message: 'Password is too short'
	})
	@IsStrongPassword()
	password?: string
}
