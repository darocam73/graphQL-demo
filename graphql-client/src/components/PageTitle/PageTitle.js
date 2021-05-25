const PageTitle = ({ title }) => {
  if (!title) return null;
  return (
    <p className="h2">{title}</p>
  )
}

export default PageTitle;
