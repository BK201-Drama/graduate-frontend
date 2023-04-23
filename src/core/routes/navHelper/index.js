export const navHelper = () => {
  const navigate = useNavigate()
  return {
    toLogin: () => navigate('/login'),
    toUserList: () => navigate('/user/list'),
    toRoleList: () => navigate('/role/list'),
    toPage403: () => navigate('/auth/403'),
  }
}
