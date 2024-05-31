import { AuthGuard } from '@nestjs/passport'

export class JwtAurhGuard extends AuthGuard('jwt') {}
