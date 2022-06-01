import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useSearchableState } from '../src/index';
import MockData from './MockData.js';

const App = () => {
  const [list, setList, searchList] = useSearchableState([]);

  React.useEffect(() => {
    setList(MockData);
  }, []);

  const handleSearch = e => searchList(e.target.value);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleSearch}
      />
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
