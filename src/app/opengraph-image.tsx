import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          fontWeight: 'bold',
        }}
      >
        Face Detection by Mahesh Muttinti
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
