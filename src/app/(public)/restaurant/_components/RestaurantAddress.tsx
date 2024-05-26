function RestaurantAddress({ address }: { address: string }) {
  return (
    <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
      <p>
        <span className="font-semibold">Adress:</span>
        {address}
      </p>
    </div>
  );
}

export { RestaurantAddress };
