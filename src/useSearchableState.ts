import { useCallback, useState } from 'react';

export const useSearchableState = (value: any) => {
  const [initialData, setInitialData] = useState(value);
  const [data, setData] = useState(value);

  const searchByTerm = (term: string) => {
    const results = initialData.filter((item: any) => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(term.toLowerCase());
    });

    setData(results);
  };

  const searchByCallback = async (callback: Function) => {
    const results = await callback(initialData);

    setData(results);
  };

  const searchData = (termOrCalback: string | Function) => {
    if (typeof termOrCalback === 'function') {
      searchByCallback(termOrCalback);
    } else {
      searchByTerm(termOrCalback);
    }
  };

  const changeData = useCallback((param: any) => {
    setInitialData(param);
    setData(param);
  }, []);

  return [data, changeData, searchData];
};
