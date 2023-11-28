import { Recipe, query } from "@/db/queries/recipeFeed";
import MainFeed from "@/components/MainFeed";
import SearchComponent from "../../components/SearchComponent";
import { searchQuery } from "@/db/queries/searchFeed";

export default async function Search({
  searchParams,
}: {
  [key: string]: string | string[] | undefined;
}) {
  // @ts-ignore
  const theSearchQuery = searchQuery(searchParams.query);
  const searchResult = (await theSearchQuery.execute()) as Recipe[];

  return (
    <SearchComponent searchResult={searchResult} />

    // <SearchComponent>
    //   {searchResult.map((recipe) => (
    //     <MainFeed recipe={recipe} />
    //   ))}
    // </SearchComponent>
  );
}
