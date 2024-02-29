interface NullDataProps {
  title: String;
}

const NullData = ({ title }: NullDataProps) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default NullData;
