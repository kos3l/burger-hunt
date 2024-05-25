async function fetchRestaurantByLocation({ address }: { address: string }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const data = await fetch(`${apiUrl}/restaurant/search?address=${address}`);
  return data.json().then(() => {
    // NOTE: Mock data
    const mockedResturant = {
      id: 'wefwefwefwef',
      name: 'Mcdonalds',
      types: ['burger'],
      primaryType: 'Restaurant',
      internationalPhoneNumber: '+45500000000',
      formattedAddress: 'Willemoesgade 20 Esbjerg 67000',
      shortFormattedAddress: 'Willemoesgade 20',
      websiteUri: 'https://tanstack.com/query/v3/docs/framework/react/overview',
      openingHours: 'Monday: 10',
      totalRating: 4,
      tastyTotalRating: 3,
      textureTotalRating: 2,
      visualTotalRating: 1,
      //   openingHours: {
      //     openNow: true,
      //     monday: { from: '2024-05-25T12:00:00Z', to: '2024-05-25T12:00:00Z' },
      //     tuesday: { from: '2024-05-25T12:00:00Z', to: '2024-05-25T12:00:00Z' },
      //   },
    };

    return [mockedResturant];
  });
}

export { fetchRestaurantByLocation };
