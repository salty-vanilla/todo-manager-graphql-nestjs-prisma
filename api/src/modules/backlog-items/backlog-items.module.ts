import { Module } from '@nestjs/common';
import { BacklogItemsService } from './backlog-items.service';
import { BacklogItemsResolver } from './backlog-items.resolver';

@Module({
  providers: [BacklogItemsResolver, BacklogItemsService]
})
export class BacklogItemsModule {}
