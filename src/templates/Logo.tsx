import { AppConfig } from '@/utils/AppConfig';

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
    {AppConfig.name}
  </div>
);

export { Logo };
