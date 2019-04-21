import Mock from 'mockjs';

Mock.mock('/register', () => {
  return Mock.mock({
    number: '1'
  });
});
