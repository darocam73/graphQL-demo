import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  const allItems = useMemo(() => ([
    { path: '/', name: 'Home' },
    ...items,
  ]), [items]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-0 py-4">
        {allItems.map(({ path, name }, index) => (
          <li className="breadcrumb-item" key={`${path || ''}-${name}`}>
            {index === allItems.length - 1 ? (
              <span>{name}</span>
            ) : (
              <Link to={path}>{name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb;
