import React from 'react';
import {
  Thermometer,
  Snowflake,
  Wind,
  Activity,
  Zap,
  Sparkles,
  Eye,
  Headphones,
  HeartPulse,
  Scale,
  Smile,
  Sun,
  Heart,
  Droplet,
  Moon,
  ShieldCheck,
  Apple,
  Flame,
  Stethoscope,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface IconHelperProps extends LucideProps {
  name: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Thermometer':
      return <Thermometer {...props} />;
    case 'Snowflake':
      return <Snowflake {...props} />;
    case 'Wind':
      return <Wind {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Eye':
      return <Eye {...props} />;
    case 'Headphones':
      return <Headphones {...props} />;
    case 'HeartPulse':
      return <HeartPulse {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'Smile':
      return <Smile {...props} />;
    case 'Sun':
      return <Sun {...props} />;
    case 'Heart':
      return <Heart {...props} />;
    case 'Droplet':
      return <Droplet {...props} />;
    case 'Moon':
      return <Moon {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Apple':
      return <Apple {...props} />;
    case 'Flame':
      return <Flame {...props} />;
    case 'Stethoscope':
      return <Stethoscope {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
