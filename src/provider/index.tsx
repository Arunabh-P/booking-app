import ToastTemplate from '@/components/template/tost-template';
import { NextIntlClientProvider, useMessages } from 'next-intl';
const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
        <ToastTemplate />
        {children}
    </NextIntlClientProvider>
  );
};

export default ProvidersWrapper;
