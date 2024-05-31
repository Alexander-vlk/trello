import { UseGuards } from '@nestjs/common'
import { JwtAurhGuard } from '../guards/jwt.guard'

export const Auth = () => UseGuards(JwtAurhGuard)
