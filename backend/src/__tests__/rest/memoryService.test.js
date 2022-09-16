import { memoryService } from '../../services';
import { jest } from '@jest/globals';
import fs from 'fs-extra';
import { vol } from 'memfs';


jest.mock('fs/promises')


describe('Tests for memoryService', ()=> {

  beforeEach(()=> {
    vol.reset();
  })

  it('should write to file', async () => {
    const file = '/file.txt';
    const expectedResult = '1234';

    await memoryService.memorySave(file, expectedResult);

    const result = await fs.readFile(file, 'utf8');
    expect(result).toEqual(expectedResult);
  });

  it('should read from file', async () => {
    const file = '/file.txt';
    const data = "1234";

    await fs.writeFile(file, data, 'utf8');

    const result = await memoryService.memoryRecall(file);
    expect(result).toEqual(data);
  });
});
