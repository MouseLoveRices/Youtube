import { signup, signin, googleAuth } from '../server/controllers/auth.js';
import { assert } from 'chai';



  describe('signin', () => {
    it('should signin with correct credentials', async () => {
      const req = {
        body: {
          name: 'test1',
          password: '123456',
        },
      };
      const res = {
        status: () => {},
        json: () => {}
      };
      const next = () => {};
  
      try {
        await signin(req, res, next);
        assert.equal(res.status(), 200);
        // Kiểm tra các thông tin user trả về ở đây nếu cần
      } catch (error) {
        // Xử lý nếu có lỗi xảy ra
        assert.fail(error);
      }
    });
  });
  
  describe('googleAuth', () => {
    it('should signin with Google if user exists', async () => {
      // Viết test cho trường hợp đăng nhập bằng Google với user đã tồn tại
    });

    it('should signup with Google if user does not exist', async () => {
      // Viết test cho trường hợp đăng ký mới bằng Google với user chưa tồn tại
    });

    // Thêm các bài kiểm tra khác ở đây
  });

