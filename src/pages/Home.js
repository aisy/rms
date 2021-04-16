import { Row } from 'antd';
import LayoutHome from '../layouts/LayoutHome';

// component page
import DokumenArsip from '../components/pages/Home/DokumenArsip';
import StatusLibrary from '../components/pages/Home/StatusLibrary';

const Home = () => {

  return (
    <div>
      <LayoutHome>
        <Row gutter={16}>
          <DokumenArsip />
          {/* <DokumenArsip /> */}
          <StatusLibrary />
        </Row>
      </LayoutHome>
    </div>
  )
}

export default Home
