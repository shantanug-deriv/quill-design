import { QuillSvgProps } from '@deriv/quill-icons'
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  forwardRef,
  useEffect,
  useRef,
} from 'react'
import {
  baseInputLabelVariants,
  baseInputVariants,
  baseInputWrapperVariants,
  baseStatusMessageVariants,
  iconSize,
  statusIconColours,
} from './base.classnames'
import { VariantProps } from 'class-variance-authority'
import qtMerge, { qtJoin } from 'qtMerge'

export type InputSize = Exclude<
  VariantProps<typeof baseInputWrapperVariants>['size'],
  null
>
export type InputStatus = Exclude<
  VariantProps<typeof baseInputWrapperVariants>['status'],
  null
>

type InputVariant = Exclude<
  VariantProps<typeof baseInputWrapperVariants>['variant'],
  null
>

type InputTextAlignment = Exclude<
  VariantProps<typeof baseInputVariants>['alignment'],
  null
>

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute
  icon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  statusIcon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  inputSize?: InputSize
  status?: InputStatus
  disabled?: boolean
  variant?: InputVariant
  leftStatusMessage?: string
  rightStatusMessage?: string
  textAlignment?: InputTextAlignment
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      inputSize = 'md',
      className,
      onFocus,
      status = 'neutral',
      disabled = false,
      variant = 'outline',
      onBlur,
      icon: Icon,
      leftStatusMessage,
      rightStatusMessage,
      textAlignment = 'left',
      label,
      placeholder,
      statusIcon: StatusIcon,
      ...rest
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if (disabled) {
        wrapperRef.current?.setAttribute('data-disabled', 'disabled')
      } else {
        wrapperRef.current?.removeAttribute('data-disabled')
      }
    }, [disabled])
    const clearHover = (event: React.FocusEvent<HTMLInputElement>) => {
      if (event.currentTarget?.parentElement?.getAttribute('data-hovered')) {
        event.currentTarget?.parentElement?.removeAttribute('data-hovered')
      }
    }
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      clearHover(event)
      event.target.parentElement?.setAttribute('data-focused', 'focused')
      onFocus?.(event)
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      clearHover(event)
      event.target.parentElement?.removeAttribute('data-focused')
      onBlur?.(event)
    }
    return (
      <div className="flex flex-col">
        <div
          ref={wrapperRef}
          className={qtMerge(
            baseInputWrapperVariants({
              size: inputSize,
              status: status,
              className,
              variant,
            }),
          )}
          onMouseEnter={(event) => {
            if (
              !disabled &&
              !event.currentTarget.getAttribute('data-focused')
            ) {
              event.currentTarget?.setAttribute('data-hovered', 'hovered')
            }
          }}
          onMouseLeave={(event) => {
            if (
              !disabled &&
              !event.currentTarget.getAttribute('data-focused')
            ) {
              event.currentTarget?.removeAttribute('data-hovered')
            }
          }}
        >
          {Icon && (
            <div>
              <Icon {...iconSize[inputSize]} />
            </div>
          )}
          <input
            type={type}
            className={qtJoin(
              baseInputVariants({
                variant,
                size: inputSize,
                status,
                alignment: textAlignment,
              }),
            )}
            {...rest}
            placeholder={label ? '' : placeholder}
            disabled={!!disabled}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {label && inputSize === 'md' && (
            <label
              className={qtMerge(
                baseInputLabelVariants({
                  status,
                }),
              )}
              htmlFor="input"
            >
              {label}
            </label>
          )}
          {StatusIcon && (
            <div>
              <StatusIcon
                {...iconSize[inputSize]}
                fill={statusIconColours[status]}
              />
            </div>
          )}
        </div>
        <div className={qtMerge('flex justify-between')}>
          {leftStatusMessage && (
            <p
              className={qtMerge(
                baseStatusMessageVariants({ status, disabled }),
              )}
            >
              {leftStatusMessage}
            </p>
          )}
          {rightStatusMessage && (
            <p
              className={qtMerge(
                baseStatusMessageVariants({ status, className: 'self-end' }),
              )}
            >
              {rightStatusMessage}
            </p>
          )}
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
