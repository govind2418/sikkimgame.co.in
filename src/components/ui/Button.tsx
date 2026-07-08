import Link from 'next/link';
import { SITE } from '@/lib/site';
import { ArrowRightIcon } from '@/components/icons';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-royal-500 text-white hover:bg-royal-400 shadow-glow hover:shadow-none border border-royal-400/50',
  secondary:
    'bg-white/5 text-white border border-white/15 hover:border-neon-400/60 hover:bg-white/10',
  ghost: 'bg-transparent text-neon-300 hover:text-white border border-transparent',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CtaButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
};

export function CtaButton({
  href = SITE.officialUrl,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = true,
  showArrow = true,
}: CtaButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={classes}>
        {children}
        {showArrow && <ArrowRightIcon className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </Link>
  );
}
