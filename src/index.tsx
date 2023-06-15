import React, {ReactNode, useEffect, useState} from 'react';

import styles from './index.module.css';

const defaultAnimationDuration = 210

function DefaultCloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
    </svg>
  )
}

export default function ModalWindow(props: {
  isActive: boolean,
  title: JSX.Element | string,

  children?: ReactNode,

  onClose?(): void,

  animationDuration?: number,

  closeButtonContents?: JSX.Element | string,

  containerClassName?: string,
  headerClassName?: string,
  headerTitleClassName?: string,
  closeButtonClassName?: string,
  contentsClassName?: string
}) {

  // State
  const [isScrollable, setIsScrollbable] = useState(props.isActive)

  // Handle outside click function
  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if(event.target === event.currentTarget) {
      props.onClose?.()
    }
  }

  // Watch for isScrollbable
  useEffect(() => {
    if(props.isActive) {
      setTimeout(() => {
        setIsScrollbable(true)
      }, props.animationDuration ?? defaultAnimationDuration)
    }
    else {
      setTimeout(() => setIsScrollbable(false), 0)
    }
  }, [props.isActive])
  
  // Render
  return (
    <div
      className={[
        styles.ModalWindow,
        ...(isScrollable ? ['_isScrollable'] : []),
        ...(props.isActive ? ['_isShown'] : [])
      ].join(' ')}
      style={{
        '--transition-duration': `${props.animationDuration ?? defaultAnimationDuration}ms`
      } as never}
      onClick={handleOutsideClick}
    >
      <div
        className={[
          styles.container,
          ...(props.containerClassName ? [props.containerClassName] : []),
          ...(props.isActive ? ['_isShown'] : [])
        ].join(' ')}
      >

        <div
          className={[
            styles.header,
            ...(props.headerClassName ? [props.headerClassName] : []),
          ].join(' ')}
        >

          {typeof props.title === 'string' ? (
            <div
              className={[
                styles.headerTitle,
                ...(props.headerTitleClassName ? [props.headerTitleClassName] : []),
              ].join(' ')}
            >
              {props.title}
            </div>
          ) : (
            props.title
          )}

          {props.onClose ? (
            <button
              className={[
                "_isZeroed",
                styles.headerCloseButton,
                ...(props.closeButtonClassName ? [props.closeButtonClassName] : []),
              ].join(' ')}
              onClick={() => props.onClose?.()}
            >
              {props.closeButtonContents ?? <DefaultCloseIcon />}
            </button>
          ) : null}
        </div>

        <div
          className={[
            styles.contents,
            ...(props.contentsClassName ? [props.contentsClassName] : []),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
