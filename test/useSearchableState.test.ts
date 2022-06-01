import { act, renderHook } from '@testing-library/react-hooks';
import { useSearchableState } from '../src';

describe('useSearchableState', () => {
  it('search by term', () => {
    const Mock = [{ name: 'Jane' }, { name: 'David' }];
    const { result } = renderHook(() => useSearchableState([]));

    expect(JSON.stringify(result.current[0])).toBe(JSON.stringify([]));

    act(() => {
      result.current[1](Mock);
    });

    expect(JSON.stringify(result.current[0])).toBe(JSON.stringify(Mock));

    act(() => {
      result.current[2]('D');
    });

    expect(JSON.stringify(result.current[0])).toBe(
      JSON.stringify(Mock.filter(item => item.name.includes('D')))
    );
  });
});
