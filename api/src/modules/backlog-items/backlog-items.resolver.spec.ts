import { Test, TestingModule } from '@nestjs/testing';
import { BacklogItemsResolver } from './backlog-items.resolver';
import { BacklogItemsService } from './backlog-items.service';

describe('BacklogItemsResolver', () => {
  let resolver: BacklogItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BacklogItemsResolver, BacklogItemsService],
    }).compile();

    resolver = module.get<BacklogItemsResolver>(BacklogItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
