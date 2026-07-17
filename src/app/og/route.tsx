import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Sikkim Game';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #030712 0%, #071022 50%, #0f1e42 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(0,212,255,0.45)',
            color: '#7ee8fa',
            fontSize: '22px',
            marginBottom: '32px',
          }}
        >
          sikkimgame.co.in
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '68px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            maxWidth: '950px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: '28px',
            color: '#94a3b8',
          }}
        >
          Sign In • Sign Up • APK Guide • Bonus Codes • Wingo • Colour Prediction
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
