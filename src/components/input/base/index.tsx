import { QuillSvgProps } from '@deriv/quill-icons/QuillTypes'
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  forwardRef,
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
import { ExcludeNullAndUndefined } from 'types'

type baseInputWrapperVariantsExcludingNullAndUndefined =
  ExcludeNullAndUndefined<
    VariantProps<typeof baseInputWrapperVariants>,
    'size' | 'status' | 'variant'
  >

type baseInputVariantsExcludingNullAndUndefined = ExcludeNullAndUndefined<
  VariantProps<typeof baseInputVariants>,
  'alignment'
>

export type InputSize =
  baseInputWrapperVariantsExcludingNullAndUndefined['size']

export type InputStatus =
  baseInputWrapperVariantsExcludingNullAndUndefined['status']

export type InputVariant =
  baseInputWrapperVariantsExcludingNullAndUndefined['variant']

export type InputTextAlignment =
  baseInputVariantsExcludingNullAndUndefined['alignment']

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
  value?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      inputSize = 'md',
      className,
      status = 'neutral',
      disabled = false,
      variant = 'outline',
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
    return (
      <div className="flex flex-col">
        <div
          className={qtMerge(
            baseInputWrapperVariants({
              size: inputSize,
              status: status,
              className,
              variant,
            }),
          )}
        >
          {Icon && (
            <div>
              <Icon {...iconSize[inputSize]} />
            </div>
          )}
          <input
            {...rest}
            type={type}
            className={qtJoin(
              baseInputVariants({
                variant,
                size: inputSize,
                status,
                alignment: textAlignment,
              }),
            )}
            disabled={!!disabled}
            placeholder={placeholder}
            ref={ref}
          />

          {label && inputSize === 'md' && (
            <label
              className={qtJoin(
                baseInputLabelVariants({
                  status,
                }),
              )}
            >
              {label}
            </label>
          )}
          {StatusIcon && (
            <div>
              <StatusIcon
                {...iconSize[inputSize]}
                className={qtJoin(statusIconColours[status])}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between">
          {leftStatusMessage && (
            <p
              className={qtJoin(
                baseStatusMessageVariants({ status, disabled }),
              )}
            >
              {leftStatusMessage}
            </p>
          )}
          {rightStatusMessage && (
            <p
              className={qtJoin(
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
