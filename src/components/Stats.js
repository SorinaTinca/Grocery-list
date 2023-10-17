export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <span>Start adding some items to your grocery list </span>
      </footer>
    );
  const numItems = items.length;
  const numBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <span>You finished your groceries 🎉</span>
      ) : (
        <span>
          You have {numItems} items on your list, and you already bought{" "}
          {numBought} ({percentage}%)
        </span>
      )}
    </footer>
  );
}
