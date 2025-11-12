import Image from 'next/image'
import clsx from 'clsx'

import wordmarkImage from '@/../public/probolabs-with-text.png'

type LogoProps = React.ComponentPropsWithoutRef<'span'> & {
  imageClassName?: string
}

export function Logo({ className, imageClassName, ...props }: LogoProps) {
  return (
    <span
      {...props}
      className={clsx('inline-flex items-center', className)}
    >
      <Image
        src={wordmarkImage}
        alt="ProboLabs.ai"
        className={clsx('h-8 w-auto', imageClassName)}
        priority
      />
    </span>
  )
}
