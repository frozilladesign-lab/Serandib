import React, { useEffect, useMemo, useState } from 'react';

function getTargetTime() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(6, 50, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  return target.getTime();
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function getSecondsRemaining(targetMs: number) {
  return Math.max(0, Math.round((targetMs - Date.now()) / 1000));
}

export function CountdownOverlay() {
  const targetTime = useMemo(() => getTargetTime(), []);
  const [remainingSeconds, setRemainingSeconds] = useState(() => getSecondsRemaining(targetTime));
  const [finished, setFinished] = useState(remainingSeconds === 0);

  useEffect(() => {
    if (finished) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const nextSeconds = getSecondsRemaining(targetTime);
      setRemainingSeconds(nextSeconds);
      if (nextSeconds <= 0) {
        setFinished(true);
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [finished, targetTime]);

  return (
    <div className="countdown-overlay" role="alert" aria-live="polite">
      <div className="countdown-panel">
        <img src="/logo1.webp" alt="Serandib Journeys logo" className="countdown-logo mx-auto mb-6 h-14 w-auto object-contain" />
        <div className="countdown-heading">Welcome! We’re Launching at 6:50 AM</div>
        {finished ? (
          <>
            <div className="countdown-time countdown-time--finished">00:00</div>
            <div className="countdown-message">Our launch is live — enjoy the celebration!</div>
            <div className="fireworks-grid" aria-hidden="true">
              <span className="firework firework--one" />
              <span className="firework firework--two" />
              <span className="firework firework--three" />
              <span className="firework firework--four" />
              <span className="firework firework--five" />
            </div>
          </>
        ) : (
          <>
            <div className="countdown-time">{formatTime(remainingSeconds)}</div>
            <div className="countdown-message">
              We’re excited to welcome you to our brand new website. Our official launch is just moments away!
            </div>
            <div className="countdown-submessage">
              Please stay on this page — the website will automatically open when the countdown ends. We look forward to welcoming you and supporting you throughout your journey.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
