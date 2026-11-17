import { site } from '@/lib/site';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path d="M4 2.8v18.4c0 .6.6 1 1.1.7l16-9.2c.5-.3.5-1.1 0-1.4l-16-9.2C4.6 1.8 4 2.2 4 2.8Z" fill="currentColor" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-3.8ZM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4Z"
      />
    </svg>
  );
}

export default function StoreButtons({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { googlePlay, appStore } = site.stores;
  return (
    <div className={`stores stores--${tone}`}>
      <a className="store" href={googlePlay} target="_blank" rel="noopener noreferrer">
        <PlayIcon />
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
      {appStore ? (
        <a className="store" href={appStore} target="_blank" rel="noopener noreferrer">
          <AppleIcon />
          <span>
            <small>Download on the</small>
            App Store
          </span>
        </a>
      ) : (
        <span className="store store--soon" aria-disabled="true">
          <AppleIcon />
          <span>
            <small>Get it on the</small>
            App Store
          </span>
        </span>
      )}
    </div>
  );
}
