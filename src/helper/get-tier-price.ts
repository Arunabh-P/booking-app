export const getTierPricing = (rowIndex:number) => {
    if (rowIndex < 2) return { price: 100, tier: 'Silver' };
    if (rowIndex < 4) return { price: 150, tier: 'Gold' };
    return { price: 200, tier: 'Platinum' };
  };