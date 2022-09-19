import supertest from 'supertest';
import app from '../../rest';
import { memoryService } from '../../services';

describe('POST memory/save', () => {
  const server = supertest(app);
  it('should response with status code 200',async ()=> {
    const requestBody = {
      data: await memoryService.memoryRecall('/file.txt')
    };
    const res = await server.post('/memory/save').send(requestBody);
    expect(res.status).toEqual(200);
    expect(res.body.message).toBe('saved to memory');
  })
})