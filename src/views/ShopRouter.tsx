import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Marketplace from './Marketplace';
import MyCollection from './MyCollection';
import SingleOrder from './SingleOrder';
import TopNav from '@/components/TopNav';
import { RouteName } from '@/constant/routeNames';
import { useUpdateShop } from '@/hooks/useUpdateShop';

export const ShopRouter = () => {
  useUpdateShop();
  return (
      <main>
        <MainContainer>
          <TopNav />
          <Routes>
            <Route path={RouteName.home} element={<Marketplace />} />
            <Route path={RouteName.marketplaceMint} element={<SingleOrder />} />
            <Route path={RouteName.sell} element={<MyCollection />} />
          </Routes>
        </MainContainer>
      </main>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  margin-right: 4%;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
`;
