import type { CSSProperties, FC } from 'react'
import {
  EReCaptchaV2Size,
  EReCaptchaV2Theme,
  ReCaptchaProvider,
  ReCaptchaV2
} from 'react-recaptcha-x'

type RecaptchaProps = {
  isMobile: boolean
  style: CSSProperties
  v2Callback: (token: string | false | Error) => void
}

const Recaptcha: FC<RecaptchaProps> = props => {
  const { isMobile, v2Callback, style } = props

  return (
    <ReCaptchaProvider
      siteKeyV2='6LclJOEjAAAAAIdMawPNpQhz7AQaSh3IeYxU9Q-2'
      langCode='es'
    >
      <div style={style}>
        <ReCaptchaV2
          callback={v2Callback}
          theme={EReCaptchaV2Theme.Dark}
          size={isMobile ? EReCaptchaV2Size.Compact : EReCaptchaV2Size.Normal}
          style={{
            display: 'grid',
            placeContent: 'center'
          }}
          key={`${isMobile}`}
        />
      </div>
    </ReCaptchaProvider>
  )
}

export { Recaptcha }
