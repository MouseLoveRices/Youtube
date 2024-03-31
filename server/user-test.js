import User from '../server/models/User.js';
import { expect } from 'chai';

describe('User model', () => {
  it('should create a new user', () => {
    const user = new User({
      name: 'John',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(user.name).to.equal('John');
    expect(user.email).to.equal('john@example.com');
    expect(user.password).to.equal('password123');
  });

  // Thêm các bài kiểm tra khác ở đây
});