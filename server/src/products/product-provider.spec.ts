import { Test, TestingModule } from '@nestjs/testing';
import { ProductProvider } from './product-provider';

describe('ProductProviderService', () => {
    let service: ProductProvider;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductProvider],
        }).compile();

        service = module.get<ProductProvider>(ProductProvider);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
