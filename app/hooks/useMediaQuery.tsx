import { useEffect, useState } from "react";

// https://zenn.dev/nabeliwo/articles/89099b39223eca
// 上の記事を参考に作成
// 使い方も記事を参考にしてね

export const mediaQuery = {
 sp: "max-width: 752px",
 tablet: "min-width: 752px and max-width: 1122px",
 pc: "min-width: 1122px",
};

export const useMediaQuery = (query: string) => {
 const formattedQuery = `(${query})`;
 const [match, setMatch] = useState(false);

 useEffect(() => {
  const mql = matchMedia(formattedQuery);
  setMatch(mql.matches);

  if (mql.media === "not all" || mql.media === "invalid") {
   console.error(`useMediaQuery Error: 不正なメディアクエリが指定されました: ${query}`);
  }

  mql.onchange = (e) => {
   setMatch(e.matches);
  };

  return () => {
   mql.onchange = null;
  };
 }, [formattedQuery, query]);

 return match;
};
