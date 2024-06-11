import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class PomodoroDto {
	@IsNumber()
	totalSeconds: number

	@IsOptional()
	@IsBoolean()
	isCompleted: boolean
}
