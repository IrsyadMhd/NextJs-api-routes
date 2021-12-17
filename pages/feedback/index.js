import { getFilePath, getData } from '../api/feedback';

const feedbackPage = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = getFilePath();
  const data = getData(filePath);

  return {
    props: {
      items: data,
    },
  };
}

export default feedbackPage;
