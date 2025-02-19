export const getTierColor = (rowIndex: number) => {
    if (rowIndex < 2) return '#eaeaea';
    if (rowIndex < 4) return '#ffd98d';
    return '#fee3ff';
  };
