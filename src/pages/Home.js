import { Row } from 'antd';
import LayoutHome from '../layouts/LayoutHome';

// component page
import DokumenArsip from '../components/Home/DokumenArsip';
import StatusLibrary from '../components/Home/StatusLibrary';

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
