import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayModule } from './api-gateway.module';
import { INestApplication } from '@nestjs/common';

const BAD_REQUEST = 400;
const OK = 200;

describe('Deals Endpoints', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiGatewayModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/deals/:id', () => {
    it('should return 400 if id is not a string', async () => {
      return request(app.getHttpServer()).get('/deals/123').expect(BAD_REQUEST);
    });

    it('should return 200 if id is a string', async () => {
      return request(app.getHttpServer()).get('/deals/someStringId').expect(OK);
    });
  });

  describe('/deals/list', () => {
    it('should return 200 if page and pageSize are given', async () => {
      return request(app.getHttpServer())
        .get('/deals/list?page=1&pageSize=10')
        .expect(OK);
    });

    it('should return 400 if page is not a number', async () => {
      return request(app.getHttpServer())
        .get('/deals/list?page=abc&pageSize=10')
        .expect(BAD_REQUEST);
    });

    it('should return 400 if pageSize is not a number', async () => {
      return request(app.getHttpServer())
        .get('/deals/list?page=1&pageSize=xyz')
        .expect(BAD_REQUEST);
    });
  });
});
