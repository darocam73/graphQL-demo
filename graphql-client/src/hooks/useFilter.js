import {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  filterValue: undefined,
};

const FilterContext = createContext(initialState);

FilterContext.displayName = 'FilterContext';

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_VALUE': {
      return {
        ...state,
        filterValue: action.filterValue,
      };
    }
    default:
      return state;
  }
};

const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setFilterValue = useCallback((filterValue) => {
    dispatch({ type: 'FILTER_VALUE', filterValue })
  }, []);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setFilterValue,
      }}
      {...props}
    />
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const ManagedFilterContext = ({ children }) => (
  <FilterProvider>{children}</FilterProvider>
);

ManagedFilterContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
