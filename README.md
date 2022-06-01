# Use Searchable State

This hook is for creating searchalbe states.

## Usage

```js
  import { useSearchableState } from "use-searchable-state"

  const App => () => {

    const [data, setData, searchData] = useSearchableData([]);

    const handleSearch = (term) => {

        //Search directly all object
        searchData(term);

        //Or search with custom search method
        searchData((initialData) => {
          return initialData.filter(item => {
              return item.name.includes(term)
          });
        });
    }
  }
```

## Notes

Use set method only when you want to change initial data too. Otherwise you can use search method to set state for temporarily. Default search method is for searching an object inside of the initial state.

Here is an example for API search:

```js
searchData(async initialData => {
  return await API.get('http://example.com/filter');
});
```
