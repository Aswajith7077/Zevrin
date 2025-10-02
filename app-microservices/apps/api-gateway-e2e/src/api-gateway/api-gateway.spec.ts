import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});

describe('Deals Endpoints', () => {
  describe('/deals/:id', () => {
    it('should return 400 if id is not a string', async () => {
      try {
        await axios.get('/deals/123');
      } catch (error: any) {
        expect(error.response.status).toBe(400);
        return;
      }
      throw new Error('Test should have thrown an error');
    });

    it('should return 200 if id is a string', async () => {
      const res = await axios.get('/deals/someStringId');
      expect(res.status).toBe(200);
    });
  });

  describe('/deals/list', () => {
    it('should return 200 if page and pageSize are given', async () => {
      const res = await axios.get('/deals/list?page=1&pageSize=10');
      expect(res.status).toBe(200);
    });

    it('should return 400 if page is not a number', async () => {
      try {
        await axios.get('/deals/list?page=abc&pageSize=10');
      } catch (error: any) {
        expect(error.response.status).toBe(400);
        return;
      }
      throw new Error('Test should have thrown an error');
    });

    it('should return 400 if pageSize is not a number', async () => {
      try {
        await axios.get('/deals/list?page=1&pageSize=xyz');
      } catch (error: any) {
        expect(error.response.status).toBe(400);
        return;
      }
      throw new Error('Test should have thrown an error');
    });
  });
});
