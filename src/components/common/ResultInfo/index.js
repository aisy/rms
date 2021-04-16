import { useEffect } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

function ResultInfo({ status, title, subtitle, extra, typeExtra }) {

  useEffect(() => {
    console.log(extra);
  }, []);

  const ShowExtra = () => {
    if (extra === false) {
      return (
        <div></div>
      )
    } else {
      // back to homepage
      if (typeExtra === "backToHome") {
        return (
          <Link to={"/"}>
            <Button
              type={'primary'}
              size={"large"}
              shape={"round"}
            >
              kembali ke halaman utama
            </Button>
          </Link>
        );
      } else {
        return (
          <Button type={"primary"}>ga tahu nih</Button>
        );
      }
    }
  }

  return (
    <div>
      <Result
        status={status ? status : "info"}
        title={title ? title : ""}
        subTitle={subtitle ? subtitle : ""}
        extra={<ShowExtra />}
      />
    </div>
  )
}

export default ResultInfo
