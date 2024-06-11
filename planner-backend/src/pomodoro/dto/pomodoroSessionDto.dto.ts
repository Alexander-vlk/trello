import { IsBoolean, IsOptional } from 'class-validator'

export class PomodoroSessionDto {
	@IsOptional()
	@IsBoolean()
	isCompleted: boolean
}
