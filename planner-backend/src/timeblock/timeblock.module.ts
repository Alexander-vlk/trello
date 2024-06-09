import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TimeblockController as TimeBlockController } from './timeblock.controller'
import { TimeBlockService } from './timeblock.service'

@Module({
	controllers: [TimeBlockController],
	providers: [TimeBlockService, PrismaService],
	exports: [TimeBlockService]
})
export class TimeBlockModule {}
