export const navHelper = () => {
  const navigate = useNavigate()
  return {
    toLogin: () => navigate('/login'),
    toUserList: () => navigate('/user-management/user'),
    toRoleList: () => navigate('/user-management/role'),
  }
}
