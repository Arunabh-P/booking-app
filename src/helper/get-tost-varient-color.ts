export const getVariantStyles = (variant:'error'|'success'|'default') => {
    switch (variant) {
      case 'error':
        return 'bg-red-700 border-green-200';
      case 'success':
        return 'bg-green-300 border-green-200';
      default:
        return 'bg-white border-gray-200';
    }
};