import { useRouter, useSearchParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query: Record<string, any> = {};

  const search = searchParams.get("search") ?? undefined;

  if (search) query.search = search;

  const pushQuery = ({ search }: { search?: string }) => {
    if (search !== undefined) {
      if (search === "") {
        delete query.search;
      } else {
        query.search = search;
      }
    }

    const newQuery = new URLSearchParams(query).toString();
    router.push(`?${newQuery}`);
  };

  return { pushQuery, query };
};

export default useCustomRouter;
