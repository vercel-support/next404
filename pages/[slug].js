export default function Slug() {
  return (
    <div>
      custom page
    </div>
  )
}

export const getServerSideProps = async () => {
  return { notFound: true };
};
