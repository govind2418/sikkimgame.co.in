import { CtaButton } from '@/components/ui/Button';
import { ZapIcon } from '@/components/icons';
import { SITE } from '@/lib/site';

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/95 p-3 backdrop-blur-sm lg:hidden">
      <CtaButton
        href={SITE.registerUrl}
        variant="primary"
        size="lg"
        showArrow={false}
        className="w-full animate-glowPulse justify-center"
      >
        <ZapIcon className="h-5 w-5" />
        Join Sikkim Game Now
      </CtaButton>
    </div>
  );
}
