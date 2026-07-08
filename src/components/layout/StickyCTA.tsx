import { CtaButton } from '@/components/ui/Button';
import { DownloadIcon, UserPlusIcon } from '@/components/icons';

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/95 backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <CtaButton
          href="/download"
          external={false}
          variant="secondary"
          className="flex-1"
          showArrow={false}
        >
          <DownloadIcon className="h-4 w-4" />
          Download
        </CtaButton>
        <CtaButton href="/register" external={false} variant="primary" className="flex-1" showArrow={false}>
          <UserPlusIcon className="h-4 w-4" />
          Register Now
        </CtaButton>
      </div>
    </div>
  );
}
