import { useRouter } from 'next/router';

export default function DetailPage() {
  // const {
  //   query: { id },
  //   push,
  // } = useRouter();
  const router = useRouter();

  const { id } = router.query;

  return <h1>Hello {id}</h1>;
}
