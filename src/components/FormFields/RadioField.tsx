export default function RadioField({ option }) {
  const { label, desc } = option;
  return (
    <div>
      <p>{label}</p>
      <p>{desc}</p>
    </div>
  );
}
