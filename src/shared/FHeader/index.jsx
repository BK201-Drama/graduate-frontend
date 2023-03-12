import { Button, Layout } from 'antd';

const { Header } = Layout;

const FHeader = () => {
  const logout = () => {};

  return (
    <Header>
      <div className="flex items-center h-full justify-between">
        <h2 className="text-[#fff]">公务员考试系统</h2>
        <div className="flex items-center gap-[15px]">
          <div className="text-[#fff]">你好</div>
          <Button className="text-[#dee]" onClick={logout}>
            注销
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default FHeader;
