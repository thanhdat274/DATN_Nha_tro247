export const MENU = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Cho thuê phòng trọ', path: '/cho-thue-phong-tro' },
  { name: 'Nhà cho thuê', path: '/nha-cho-thue' },
  { name: 'Cho thuê căn hộ', path: '/cho-thue-can-ho' },
  { name: 'Blog', path: '/blog' },
  { name: 'Hướng dẫn', path: '/gioi-thieu' },
  { name: 'Nạp tiền', path: '/nap-tien' },
  { name: 'Bảng giá', path: '/bang-gia' },
  { name: 'Quản lý', path: '/quan-ly' },
];

export const MENU_ADMIN = [
  { name: 'Quản lý tin đăng', path: '/quan-ly/quan-ly-tin-dang' },
  { name: 'Đăng tin mới', path: '/quan-ly/dang-tin-moi' },
  { name: 'Sửa thông tin cá nhân', path: '/quan-ly/sua-thong-tin-ca-nhan' },
  { name: 'Nạp tiền vào tài khoản', path: '/quan-ly/nap-tien' },
  { name: 'Lịch sử thanh toán', path: '/quan-ly/lich-su-thanh-toan' },
  { name: 'Bảng giá dịch vụ', path: '/bang-gia' },
  { name: 'Liên hệ', path: '/lien-he' },
  { name: 'Thoát', path: '/logout' },
];

export const CONTACT_US = [
  { title: 'Hỗ trợ thanh toán', phoneNumber: '0824144695', zalo: '0824144695' },
  { title: 'Hỗ trợ đăng tin', phoneNumber: '0824144695', zalo: '0824144695' },
  { title: 'hotline 24/7', phoneNumber: '0824144695', zalo: '0824144695' },
];

export const FORM_LOGIN = [
  {
    id: 1,
    tabTitle: 'Đăng nhập',
    content: 'dangnhap',
  },
  {
    id: 2,
    tabTitle: 'Đăng kí',
    content: 'dangki',
  },
];

export const PROVIDERS_LOCAL = {
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    type: 'oauth',
    signinUrl: 'http://localhost:3000/api/auth/signin/facebook',
    callbackUrl: 'http://localhost:3000/api/auth/callback/facebook',
  },
  google: {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    signinUrl: 'http://localhost:3000/api/auth/signin/google',
    callbackUrl: 'http://localhost:3000/api/auth/callback/google',
  },
};

export const PROVIDERS_LIVE_SITE = (hostname) => {
  return {
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      type: 'oauth',
      signinUrl: `http://${hostname}/api/auth/signin/facebook`,
      callbackUrl: `http://${hostname}/api/auth/callback/facebook`,
    },
    google: {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      signinUrl: `http://${hostname}/api/auth/signin/google`,
      callbackUrl: `http://${hostname}/api/auth/callback/google`,
    },
  };
};
