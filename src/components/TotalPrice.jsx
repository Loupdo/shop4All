// Show total in a h2
export default function TotalPrice({ total }) {
  if (total === 0) {
    return null;
  }
  return <h2>Total price: ${total}</h2>;
}
