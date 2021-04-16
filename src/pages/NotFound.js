import ResultInfo from '../components/common/ResultInfo';

function NotFound() {
  return (
    <div>
      <ResultInfo
        status={"404"}
        title={"Opps! Halaman yang anda cari tidak ditemukan"}
        extra={true}
        typeExtra={"backToHome"}
      />
    </div>
  )
}

export default NotFound
