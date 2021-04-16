import { Progress, Card, Row, Col, Button } from 'antd';
import { DisplayStatus, TitleStatus, ButtonDetail } from './style';

const StatusLibrary = () => {
  return (
    <Col span={12}>
      <Card title={"Status Penyimpanan"}>
        <Row gutter={16}>
          <Col span={8}>
            <DisplayStatus>
              <TitleStatus>
                Gudang 1
              </TitleStatus>
              <Progress strokeColor={"#014A94"} type="circle" percent={75} />
              <div style={{ marginTop: 12 }}>asdasdasd</div>
            </DisplayStatus>
          </Col>
          <Col span={8}>
            <DisplayStatus>
              <TitleStatus>
                Gudang 1
              </TitleStatus>
              <Progress strokeColor={"#014A94"} type="circle" percent={25} />
              <div style={{ marginTop: 12 }}>asdasdasd</div>
            </DisplayStatus>
          </Col>
          <Col span={8}>
            <DisplayStatus>
              <TitleStatus>
                Gudang 1
              </TitleStatus>
              <Progress strokeColor={"#014A94"} type="circle" percent={0} />
              <div style={{ marginTop: 12 }}>asdasdasd</div>
            </DisplayStatus>
          </Col>
        </Row>
        <ButtonDetail>
          <Button
            size={"large"}
            shape={"round"}
            type={"primary"}
          >
            lihat detail
          </Button>
        </ButtonDetail>
      </Card>
    </Col>
  );
}

export default StatusLibrary;