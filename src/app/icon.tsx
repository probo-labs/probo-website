import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 36,
          fontWeight: 700,
          background: '#ffffff',
          color: '#3B82F6',
          border: '4px solid #3B82F6',
          borderRadius: '16%',
          letterSpacing: '-0.02em',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        P
      </div>
    ),
  )
}
