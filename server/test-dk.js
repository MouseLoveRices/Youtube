import { signup, signin, googleAuth } from '../server/controllers/auth.js';

describe('User Authentication', () => {
  describe('signup', () => {
    it('should create a new user', async () => {
      const req = {
        body: {
          name: 'testuser',
          email: 'test@example.com',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const next = jest.fn();

      await signup(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('User has been created!');
      expect(next).not.toHaveBeenCalled();
    });

    // Thêm các bài kiểm tra khác ở đây
  });

  describe('signin', () => {
    it('should signin with correct credentials', async () => {
      // Viết test cho trường hợp đăng nhập với thông tin đúng
    });

    it('should return error for wrong credentials', async () => {
      // Viết test cho trường hợp đăng nhập với thông tin sai
    });

    // Thêm các bài kiểm tra khác ở đây
  });

  // describe('googleAuth', () => {
  //   it('should signin with Google if user exists', async () => {
  //     // Viết test cho trường hợp đăng nhập bằng Google với user đã tồn tại
  //   });

  //   it('should signup with Google if user does not exist', async () => {
  //     // Viết test cho trường hợp đăng ký mới bằng Google với user chưa tồn tại
  //   });

  });
});
